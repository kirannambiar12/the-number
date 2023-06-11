import { db } from "@/app/global/configStore/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";

interface DocumentData {
  uid: string;
  message: string;
  number: string;
  firstName: string;
  lastName: string;
  parentCommentId: string;
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
  const number = document?.number;
  const msg = document?.message;

  if (!!msg)
    return res.status(400).json({ status: 405, message: "Message is blank" });
  try {
    if (document?.type === "REPLY") {
      const { number, ...rest } = document;
      await updateDoc(doc(db, collectionName, number), {
        "userComments.0.replies": arrayUnion({ ...rest, uid: id }),
      });
      return res.status(200).json({
        status: 201,
        message: "Added a reply",
      });
    } else {
      await updateDoc(doc(db, collectionName, number), {
        "details.comments": arrayUnion({
          ...document,
          uid: id,
          updatedAt: new Date(),
        }),
      });
      return res.status(200).json({
        status: 201,
        message: "Added a comment",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: `An error occurred: ${error}` });
  }
}
