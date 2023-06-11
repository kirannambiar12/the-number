import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../configStore/firebase";
import { useRouter } from "next/router";
import { toastActions } from "@/app/store/Toast/slice";
import { store } from "@/app/store";
import { useMutation } from "@tanstack/react-query";
import { RegisterFieldType } from "@/app/components/register/types";

const registerUser = (data: any) => {
  return createUserWithEmailAndPassword(auth, data?.email, data?.password).then(
    (resp: any) => {
      return updateProfile(resp.user, {
        displayName: `${data?.firstName} ${data?.lastName}`,
      });
    }
  );
};

export const useRegister = () => {
  const { push } = useRouter();
  return useMutation((data: RegisterFieldType) => registerUser(data), {
    onSuccess() {
      store.dispatch(
        toastActions.displayToast({
          message: "You have successfully registered to TN",
          type: "success",
        })
      );
      push("/");
    },
    onError() {
      store.dispatch(
        toastActions.displayToast({
          message: "Something went wrong. Please try again.",
          type: "error",
        })
      );
    },
  });
};
