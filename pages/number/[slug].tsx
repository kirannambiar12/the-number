import React from "react";
import NumberDetail from "@/app/components/numberDetail";
import { firebaseAPI } from "@/app/global/configStore/axios";

const NumberDetailsPage = ({ data }: any) => {
  return <NumberDetail data={data} />;
};

export default NumberDetailsPage;

export const getServerSideProps = async (pageContext: any) => {
  let data = null;
  const pageSlug = pageContext.params.slug;

  try {
    await firebaseAPI
      .post("/api/firestore/addNumber", {
        doc: {
          phoneNumber: pageSlug,
        },
        collectionName: "numbers",
      })
      .then((resp) => {
        if (resp.data.status === 200) {
          data = resp?.data?.doc;
        } else {
          throw new Error("No such document!");
        }
      });
  } catch (error) {
    console.log("Error:", error);
  }

  return {
    props: {
      data,
    },
  };
};
