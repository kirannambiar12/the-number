import { db } from "@/app/global/configStore/firebase";
import axios from "axios";
import { doc, getDoc } from "firebase/firestore";

export const getNumber = async (uid: string) => {
  const document = await getDoc(doc(db, "numbers", uid));
  const data = document.data();
  return data;
};

export const getUser = async (uid: string) => {
  const document = await getDoc(doc(db, "users", uid));
  const data = document.data();
  return data;
};

export const getComments = async (uid: string) => {
  const document = await getDoc(doc(db, "comments", uid));
  const data = document.data();
  return data;
};

export const addComment = async (data: any) => {
  const response = await axios.post("/api/firestore/addComment", data);
  return response;
};

export const rateNumber = async (data: any) => {
  const response = await axios.post("/api/firestore/rate", data);
  return response;
};
