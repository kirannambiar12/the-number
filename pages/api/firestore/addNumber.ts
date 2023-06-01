import { db } from "@/app/global/configStore/firebase";
import { doc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";

interface DocumentData {
  uid: string;
  phoneNumber: number;
  ratings: {
    score: number;
  };
}

interface APIResponse {
  status: number;
  message: string;
  docId?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  const { collectionName, doc: document } = req.body as {
    collectionName: string;
    doc: DocumentData;
  };

  const number = document?.phoneNumber?.toString();
  const id = nanoid();

  if (req.method !== "POST")
    return res.status(405).json({ status: 405, message: "Method not allowed" });

  if (!number)
    return res.status(400).json({
      status: 400,
      message: "Does not have necessary data to add the provided number",
    });

  try {
    await setDoc(doc(db, collectionName, number), { ...document, uid: id });
    return res.status(200).json({
      status: 200,
      message: "Document added successfully!",
      docId: number,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: `An error occurred: ${error}` });
  }
}
