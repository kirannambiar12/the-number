import { db } from "@/app/global/configStore/firebase";
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

const CommentSection = ({ uid }: { uid: string }) => {
  const getComments = async () => {
    const document = await getDoc(doc(db, "comments", uid));
    const data = document.data();
    return data;
  };

  const { data } = useQuery(
    ["user-comments", uid],
    async () => await getComments()
  );

  console.log(
    "🚀 ~ file: CommentSection.tsx:15 ~ CommentSection ~ data:",
    data
  );

  return (
    <>
      <div>CommentSection</div>
    </>
  );
};

export default CommentSection;
