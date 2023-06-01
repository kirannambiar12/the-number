import { QueryClient } from "@tanstack/react-query";

export const RQClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 3,
      retryDelay: 2000,
    },
  },
});
