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
        if (resp.data.status === 201) {
          data = resp?.data;
        } else {
          throw new Error("No such document!");
        }
      });
  } catch (err) {
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
