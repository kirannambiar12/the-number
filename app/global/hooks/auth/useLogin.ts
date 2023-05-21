import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configStore/firebase";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { toastActions } from "@/app/store/Toast/slice";

type SignIn = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();

  const mutate = useMutation(
    (data: SignIn) =>
      signInWithEmailAndPassword(auth, data?.email, data?.password),
    {
      onSuccess(data) {
        dispatch(
          toastActions.displayToast({
            message: "You are successfully logged In.",
            type: "success",
          })
        );
        if (data?.user?.email) push("/");
      },
      onError() {
        dispatch(
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

  return {
    ...mutate,
    getUserAuthDetails,
  };
};
