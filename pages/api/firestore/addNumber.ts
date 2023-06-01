import { db } from "@/app/global/configStore/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";

interface DocumentData {
  uid: string;
  phoneNumber: number;
  ratings?: {
    score: number;
  };
}

interface APIResponse {
  status: number;
  message: string;
  doc?: DocumentData;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  if (req.method !== "POST")
    return res.status(405).json({ status: 405, message: "Method not allowed" });

  const { collectionName, doc: document } = req.body as {
    collectionName: string;
    doc: DocumentData;
  };

  const id = nanoid();
  const number = document?.phoneNumber?.toString();

  if (!number)
    return res.status(400).json({
      status: 400,
      message: "Does not have necessary data to add the provided number",
    });

  const fetchDocument = async () => {
    const numberDocument = await getDoc(doc(db, "numbers", number));
    return numberDocument;
  };

  try {
    const numberDoc = await fetchDocument();
    if (numberDoc?.exists()) {
      return res.status(200).json({
        status: 200,
        message: "Document Found!",
        doc: numberDoc.data() as DocumentData,
      });
    } else {
      await setDoc(doc(db, collectionName, number), {
        ...document,
        uid: id,
      });
      const numberDoc = await fetchDocument();
      return res.status(200).json({
        status: 200,
        message: "Successfully created a new doc!",
        doc: numberDoc.data() as DocumentData,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: `An error occurred: ${error}` });
  }
}
