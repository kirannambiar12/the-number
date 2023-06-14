import { db } from "@/app/global/configStore/firebase";
import { collection, getDocs } from "firebase/firestore";
import { GetServerSideProps } from "next";

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  ctx.res.setHeader("Content-Type", "text/xml");
  const xmlData = await generateSitemap();
  ctx.res.write(xmlData);
  ctx.res.end();
  return {
    props: {},
  };
};

async function generateSitemap(): Promise<string> {
  const querySnapshot = await getDocs(collection(db, "numbers"));
  return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${querySnapshot.docs
          .map((item) => {
            return `<url>
            <loc>${process.env.NEXT_PUBLIC_APP_ENV}/${item.id.toString()}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            </url>`;
          })
          .join("")}
        </urlset>`;
}
