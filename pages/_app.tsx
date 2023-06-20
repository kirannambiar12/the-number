import "../styles/globals.css";
import "../app/global/styles/index.css";
import Toast from "@/app/global/components/toast";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { RQClient } from "@/app/global/configStore/reactQuery";
import Navbar from "@/app/global/components/navbar";
import { QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import SeoHead from "@/app/global/seo";
import { useEffect } from "react";
import { initializeGA } from "@/app/global/configStore/analytics/ga";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: any) {
  const { pathname } = useRouter();
  useEffect(() => initializeGA(), []);
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 80,
  };
  return (
    <>
      <SeoHead />
      <Provider store={store}>
        <QueryClientProvider client={RQClient}>
          <Navbar />
          <Toast />
          <motion.div
            key={pathname}
            transition={config}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
          >
            <Component {...pageProps} />
          </motion.div>
          <Analytics />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;
