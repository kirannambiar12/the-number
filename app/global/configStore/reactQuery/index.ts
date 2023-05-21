import { QueryClient } from "react-query";
export const RQClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
      retryDelay: 2000,
    },
  },
});
