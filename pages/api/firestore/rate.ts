import { db } from "@/app/global/configStore/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

interface DocumentData {
  score: number;
  number: string;
  uid: string;
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

  const score: number = document?.score;
  const number: string = document?.number;
  const uid: string = document?.uid;

  if (!!isNaN(score))
    return res
      .status(400)
      .json({ status: 405, message: "No rating value provided" });

  const fetchDocument = async () => {
    const numberDocument = await getDoc(doc(db, "numbers", number));
    return numberDocument;
  };

  try {
    const document = await fetchDocument();
    const updatedRating = document?.data()?.ratings?.numberOfPeopleRated + 1;
    await updateDoc(doc(db, collectionName, number), {
      "ratings.score": score,
      "ratings.numberOfPeopleRated": updatedRating,
    }).then(() => {
      updateDoc(doc(db, "users", uid), {
        canRate: false,
      });
    });

    return res.status(200).json({
      status: 201,
      message: "Your rating has been saved.",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: `An error occurred: ${error}` });
  }
}
