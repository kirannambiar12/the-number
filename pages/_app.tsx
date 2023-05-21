import { AppProps } from "next/app";
import "@/app/global/styles/globals.css";
import Toast from "@/app/global/components/toast";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { QueryClientProvider } from "react-query";
import { RQClient } from "@/app/global/configStore/reactQuery";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={RQClient}>
        <Toast />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
