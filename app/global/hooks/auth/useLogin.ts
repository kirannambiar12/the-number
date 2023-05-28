import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configStore/firebase";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { toastActions } from "@/app/store/Toast/slice";
import { store } from "@/app/store";

type SignIn = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const { push } = useRouter();

  const mutate = useMutation(
    (data: SignIn) =>
      signInWithEmailAndPassword(auth, data?.email, data?.password),
    {
      onSuccess(data) {
        store.dispatch(
          toastActions.displayToast({
            message: "You are successfully logged In.",
            type: "success",
          })
        );
        if (data?.user?.email) push("/");
      },
      onError() {
        store.dispatch(
          toastActions.displayToast({
            message: "Something went wrong. Please try again.",
            type: "error",
          })
        );
      },
    }
  );

  const getUserAuthDetails = () => {
    return auth?.currentUser;
  };

  const isAuthenticated = getUserAuthDetails()?.uid;

  return {
    ...mutate,
    isAuthenticated,
    getUserAuthDetails,
  };
};
