import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/global/configStore/firebase";
import NumberDetail from "@/app/components/numberDetail";
import { firebaseAPI } from "@/app/global/configStore/axios";

const NumberDetailsPage = ({ data }: any) => {
  return <NumberDetail data={data} />;
};

export default NumberDetailsPage;

export const getServerSideProps = async (pageContext: any) => {
  let data = null;
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
    try {
      firebaseAPI
        .post("/api/firestore/addNumber", {
          doc: {
            phoneNumber: pageSlug,
          },
          collectionName: "numbers",
        })
        .then((resp) => {
          if (resp.status === 200) {
            data = resp;
          } else {
            throw new Error("No such document!");
          }
        });
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: {
      data,
    },
  };
};
