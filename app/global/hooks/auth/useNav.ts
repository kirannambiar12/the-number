import { useRouter } from "next/router";
import { nonVisibleNavRoutes } from "../../constants";

export const useNav = () => {
  const { pathname } = useRouter();
  const isNavVisible = !nonVisibleNavRoutes.includes(pathname);

  return {
    isNavVisible,
  };
};
