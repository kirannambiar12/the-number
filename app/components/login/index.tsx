import EmailIcon from "@/app/global/assets/svgs/EmailIcon";
import next from "@/app/global/assets/images/next.png";
import prev from "@/app/global/assets/images/prev.png";
import google from "@/app/global/assets/svgs/google-icon.svg";
import avatar from "@/app/global/assets/images/avatar.png";
import PasswordIcon from "@/app/global/assets/svgs/PasswordIcon";
import { useLogin } from "@/app/global/hooks/auth/useLogin";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "./resolver";
import { LoginFieldType } from "./types";
import Textfield from "@/app/global/components/fields/Textfield";
import { getSVGComponent } from "@/app/global/utils";
import layeredBg from "@/app/global/assets/svgs/hexagons.svg";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Login = () => {
  const [isNormalLogin, setIsNormalLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFieldType>({
    resolver: yupResolver(loginValidationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { mutate, doAnonymousLogin, isLoading } = useLogin();
  const { push } = useRouter();

  const onSubmit = (data: LoginFieldType) => {
    mutate(data);
  };

  return (
    <div
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url(${layeredBg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "3% 50px",
      }}
      className="flex flex-col content-center min-h-screen"
    >
      <form
        className="rounded-lg m-auto max-w-lg w-screen relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Image
          onClick={() => setIsNormalLogin(!isNormalLogin)}
          className={`${
            isNormalLogin ? "right-0" : "left-0"
          } absolute top-1/2 w-10 cursor-pointer animate-bounce rounded-full hidden`}
          src={isNormalLogin ? next : prev}
          alt="Next slide icon"
        />
        <div className="w-full flex min-h-full justify-center px-6 py-12 lg:px-8 ">
          <div className="w-full min-h-[300px] flex justify-center">
            <AnimatePresence>
              {isNormalLogin && (
                <motion.div
                  className="flex flex-col justify-center w-full"
                  transition={{ type: "spring", duration: 0.5 }}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                      <h1
                        onClick={doAnonymousLogin}
                        className="font-[FaseBulan] mb-10 text-center text-8xl uppercase"
                      >
                        Login
                      </h1>
                    </div>
                    <div className="relative mb-3">
                      <Textfield
                        type="text"
                        name="email"
                        className={`caret-white peer border-b-2 m-0 block h-[58px] w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-gray-200 transition duration-200 ease-linear focus:border-primary ${
                          errors?.email
                            ? "dark:border-red-600 animate-error-shake"
                            : "focus:border-blue-700"
                        } focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-gray-300 focus:outline-none peer-focus:text-primary dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`}
                        labelClassName="pointer-events-none absolute left-0 top-0 origin-[0_0] border-transparent px-3 pt-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-3 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:peer-focus:text-primary"
                        id="floatingEmail"
                        placeholder="Email Address"
                        register={register}
                        icon={getSVGComponent(<EmailIcon />)}
                        errors={errors}
                      />
                    </div>

                    <div className="relative mb-3">
                      <Textfield
                        type="password"
                        name="password"
                        labelClassName="pointer-events-none absolute left-0 top-0 origin-[0_0] border-transparent px-3 pt-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-3 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:peer-focus:text-primary"
                        className={`caret-white peer border-b-2 m-0 block h-[58px] w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-gray-200 transition duration-200 ease-linear focus:border-primary ${
                          errors?.password
                            ? "dark:border-red-600 animate-error-shake"
                            : "focus:border-blue-700"
                        } focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-gray-300 focus:outline-none peer-focus:text-primary dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`}
                        id="password"
                        placeholder="Password"
                        register={register}
                        icon={getSVGComponent(<PasswordIcon />)}
                        errors={errors}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex mt-10 mb-8 w-full justify-center m-auto max-w-md rounded-full border-2 border-blue-600 bg-black transition ease-in-out delay-100 duration-300 hover:text-white text-blue-600 hover:bg-blue-600 p-3 text-center"
                      >
                        {isLoading ? "Loading..." : "Login"}
                      </button>
                    </div>
                    <span className="text-center mx-auto block">
                      Don&rsquo;t have an account yet?{" "}
                      <span
                        onClick={() => push("/register")}
                        className="text-blue-600 cursor-pointer"
                      >
                        Register here
                      </span>
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!isNormalLogin && (
                <motion.div
                  className="flex flex-col justify-center w-full"
                  transition={{ type: "spring", duration: 0.5 }}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div className="w-full">
                    <button
                      onClick={doAnonymousLogin}
                      type="submit"
                      className="flex my-10 w-full justify-center m-auto max-w-sm rounded-full border-2 border-blue-600 bg-black transition ease-in-out delay-100 duration-300 hover:text-white text-blue-600 hover:bg-blue-600 p-3 text-center relative"
                    >
                      <Image
                        className="absolute left-8 bottom-2"
                        src={avatar}
                        alt="anonymous"
                        width={30}
                      />
                      <p>Anonymous Login</p>
                    </button>
                    <button
                      type="submit"
                      className="flex my-10 w-full justify-center m-auto max-w-sm rounded-full border-2 border-blue-600 bg-black transition ease-in-out delay-100 duration-300 hover:text-white text-blue-600 hover:bg-blue-600 p-3 text-center relative"
                    >
                      <Image
                        className="absolute left-8 bottom-2"
                        src={google}
                        alt="anonymous"
                        width={30}
                      />
                      Google Login
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
