import { db } from "@/app/global/configStore/firebase";
import { doc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

interface DocumentData {
  uid: string;
  isUpdate: boolean;
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

  const uid = document?.uid;
  const isUpdate = document?.isUpdate;

  try {
    await setDoc(doc(db, collectionName, uid), {
      canRate: true,
    });

    return res.status(200).json({
      status: 200,
      message: "User has been registered",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: `An error occurred: ${error}` });
  }
}
