import { db } from "@/app/global/configStore/firebase";
import axios from "axios";
import { doc, getDoc } from "firebase/firestore";

export const getComments = async (uid: string) => {
  const document = await getDoc(doc(db, "comments", uid));
  const data = document.data();
  return data;
};

export const addComment = async (data: any) => {
  const response = await axios.post("/api/firestore/addComment", data);
  return response;
};
