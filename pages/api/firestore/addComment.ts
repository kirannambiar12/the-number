import { db } from "@/app/global/configStore/firebase";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";

interface DocumentData {
  uid: string;
  message: string;
  nid: string;
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
  const nid = document?.nid;
  const msg = document?.message;

  if (!!msg)
    return res.status(400).json({ status: 405, message: "Message is blank" });
  try {
    if (document?.type === "REPLY") {
      const { nid, ...rest } = document;
      await updateDoc(doc(db, collectionName, nid), {
        "userComments.replies": arrayUnion({ ...rest, uid: id }),
      });
      return res.status(200).json({
        status: 201,
        message: "Added a reply",
      });
    } else {
      await setDoc(doc(db, collectionName, nid), {
        userComments: {
          ...document,
          uid: id,
        },
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
