import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../configStore/firebase";
import { useRouter } from "next/router";
import { toastActions } from "@/app/store/Toast/slice";
import { store } from "@/app/store";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAuth, signInAnonymously } from "firebase/auth";

type SignIn = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const [isAuth, setIsAuth] = useState();
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

  const doAnonymousLogin = () => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then((z) => {
        console.log("🚀 ~ file: useLogin.ts:51 ~ .then ~ z:", z);
        // Signed in..
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: useLogin.ts:55 ~ doAnonymousLogin ~ error:",
          error
        );
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  const getUserAuthDetails = () => {
    return auth?.currentUser;
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user?.uid as any);
      return user;
    });
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      push("/");
    });
  };

  return {
    ...mutate,
    isAuthenticated: isAuth,
    getUserAuthDetails,
    doAnonymousLogin,
    logout,
  };
};
