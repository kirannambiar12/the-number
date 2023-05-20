import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configStore/firebase";
import { useRouter } from "next/router";

type SignIn = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const { push } = useRouter();

  const signIn = (data: SignIn) => {
    signInWithEmailAndPassword(auth, data?.email, data?.password).then(
      (user: any) => {
        if (user?.user?.accessToken) push("/");
      },
      (error: any) => {
        console.log("🚀 ~ file: useLogin.ts:20 ~ signIn ~ error:", error);
      }
    );
  };

  const getUserAuthDetails = () => {
    return auth?.currentUser;
  };

  return {
    signIn,
    getUserAuthDetails,
  };
};
