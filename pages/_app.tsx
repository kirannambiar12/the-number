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

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <SeoHead />
      <Provider store={store}>
        <QueryClientProvider client={RQClient}>
          <Navbar />
          <Toast />
          <Component {...pageProps} />
          <Analytics />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;
