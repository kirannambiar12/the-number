import { db } from "@/app/global/configStore/firebase";
import { addDoc, collection } from "firebase/firestore";

export const submitContact = async (data: any) => {
  await addDoc(collection(db, "contact-us"), data);
};
