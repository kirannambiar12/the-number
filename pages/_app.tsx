import { AppProps } from "next/app";
import "../styles/globals.css";
import "../app/global/styles/index.css";
import Toast from "@/app/global/components/toast";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { RQClient } from "@/app/global/configStore/reactQuery";
import Navbar from "@/app/global/components/navbar";
import { QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={RQClient}>
        <Navbar />
        <Toast />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
