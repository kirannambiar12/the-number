import EmailIcon from "@/app/global/assets/svgs/EmailIcon";
import PasswordIcon from "@/app/global/assets/svgs/PasswordIcon";
import { useLogin } from "@/app/global/hooks/auth/useLogin";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "./resolver";
import { LoginFieldType } from "./types";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFieldType>({
    resolver: yupResolver(loginValidationSchema),
  });
  const { signIn } = useLogin();

  const onSubmit = (data: LoginFieldType) => {
    console.log("🚀 ~ file: index.tsx:12 ~ onSubmit ~ data:", data);
    // signIn(data);
  };

  return (
    <div className="flex flex-col content-center min-h-screen">
      <form
        className="rounded-lg m-auto max-w-lg w-screen"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="font-['FaseBulan'] mt-10 text-center text-8xl uppercase">
              Sign In
            </h1>
          </div>

          <div className="my-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="relative mb-3">
              <input
                type="text"
                className={`caret-white peer border-b-2 m-0 block h-[58px] w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-gray-200 transition duration-200 ease-linear focus:border-primary ${
                  errors?.email
                    ? "focus:border-red-600 animate-error-shake"
                    : "focus:border-blue-700"
                } focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-gray-300 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`}
                id="floatingInput"
                placeholder=" "
                {...register("email", { required: true })}
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border-transparent px-3 pt-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-3 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:peer-focus:text-primary"
              >
                <div className="flex">
                  <EmailIcon /> <span className="ml-3">Email Address</span>
                </div>
              </label>
              {errors.email && (
                <span className="text-red-600 text-xs">
                  {errors?.email?.message}
                </span>
              )}
            </div>

            <div className="mt-5">
              <div className="relative mb-3">
                <input
                  type="password"
                  className={`caret-white peer border-b-2 m-0 block h-[58px] w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-white transition duration-200 ease-linear focus:border-primary focus:pb-[0.625rem] ${
                    errors?.email
                      ? "focus:border-red-600 animate-error-shake"
                      : "focus:border-blue-700"
                  } focus:pt-[1.625rem] focus:text-white focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`}
                  id="floatingPassword"
                  placeholder=" "
                  {...register("password", { required: true })}
                />
                <label
                  htmlFor="floatingPassword"
                  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:peer-focus:text-primary"
                >
                  <div className="flex">
                    <PasswordIcon /> <span className="ml-3"> Password</span>
                  </div>
                </label>
                {errors.password && (
                  <span className="text-red-600 text-xs">
                    {errors?.password?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex mt-14 w-full justify-center m-auto max-w-md rounded-full bg-blue-700 hover:bg-blue-600 p-3 text-center uppercase"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
