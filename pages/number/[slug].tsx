import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/global/configStore/firebase";
import NumberDetail from "@/app/components/numberDetail";

const NumberDetailsPage = ({ data }: any) => {
  return <NumberDetail data={data} />;
};

export default NumberDetailsPage;

export const getServerSideProps = async (pageContext: any) => {
  let data;
  const pageSlug = pageContext.params.slug;

  const docRef = doc(db, "numbers", pageSlug);
  const docSnap = await getDoc(docRef);

  try {
    if (docSnap.exists()) {
      data = docSnap.data();
    } else {
      throw new Error("No such document!");
    }
  } catch (error) {
    return error;
  }

  return {
    props: {
      data,
    },
  };
};
