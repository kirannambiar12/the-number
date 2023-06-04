import { db } from "@/app/global/configStore/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getComments = async (uid: string) => {
  const document = await getDoc(doc(db, "comments", uid));
  const data = document.data();
  return data;
};
