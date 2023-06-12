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
        const status = resp.data.status;
        if (status === 201 || status === 200) {
          data = resp?.data;
        } else {
          throw new Error("No such document!");
        }
      });
  } catch (err) {
    console.log("🚀 ~ file: [slug].tsx:32 ~ getServerSideProps ~ err:", err);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
