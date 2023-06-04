import { db } from "@/app/global/configStore/firebase";
import { doc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";

interface DocumentData {
  uid: string;
  message: string;
  userId: string;
  firstName: string;
  lastName: string;
  type: "COMMENT" | "REPLY";
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
  const msg = document?.userId;

  if (!!msg)
    return res.status(400).json({ status: 405, message: "Message is blank" });

  try {
    await setDoc(doc(db, collectionName, msg), {
      ...document,
      uid: id,
    });
    return res.status(200).json({
      status: 201,
      message: "Added a comment",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: `An error occurred: ${error}` });
  }
}
