import { db } from "@/app/global/configStore/firebase";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const querySnapshot = await getDocs(collection(db, "numbers"));
  const newsSitemaps = querySnapshot.docs.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_APP_ENV}/${item.id.toString()}`,
    lastmod: new Date().toISOString(),
  }));
  const fields = [...newsSitemaps];
  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
