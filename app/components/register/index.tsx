import EmailIcon from "@/app/global/assets/svgs/EmailIcon";
import PasswordIcon from "@/app/global/assets/svgs/PasswordIcon";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFieldType } from "./types";
import Textfield from "@/app/global/components/fields/Textfield";
import { getSVGComponent } from "@/app/global/utils";
import { registerValidationSchema } from "./resolver";
import { useRegister } from "@/app/global/hooks/auth/useRegister";
import layeredBg from "@/app/global/assets/svgs/texture.svg";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFieldType>({
    resolver: yupResolver(registerValidationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { mutate, isLoading } = useRegister();

  const onSubmit = (data: RegisterFieldType) => {
    mutate(data);
  };

  return (
    <div
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url(${layeredBg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "2% 50px",
      }}
      className="flex flex-col content-center min-h-screen"
    >
      <form
        className="rounded-lg m-auto max-w-lg w-screen"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="font-[FaseBulan] mt-10 text-center text-8xl uppercase">
              Register
            </h1>
          </div>

          <div className="my-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="relative mb-3">
              <Textfield
                type="text"
                name="firstName"
                className={`caret-white peer border-b-2 m-0 block h-[58px] w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-gray-200 transition duration-200 ease-linear focus:border-primary ${
                  errors?.firstName
                    ? "dark:border-red-600 animate-error-shake"
                    : "focus:border-blue-700"
                } focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-gray-300 focus:outline-none peer-focus:text-primary dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`}
                labelClassName="pointer-events-none absolute left-0 top-0 origin-[0_0] border-transparent px-3 pt-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-3 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:peer-focus:text-primary"
                id="firstName"
                placeholder="Your First name"
                register={register}
                icon={getSVGComponent(<EmailIcon />)}
                errors={errors}
              />
            </div>
            <div className="relative mb-3">
              <Textfield
                type="text"
                name="lastName"
                className={`caret-white peer border-b-2 m-0 block h-[58px] w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-gray-200 transition duration-200 ease-linear focus:border-primary ${
                  errors?.lastName
                    ? "dark:border-red-600 animate-error-shake"
                    : "focus:border-blue-700"
                } focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-gray-300 focus:outline-none peer-focus:text-primary dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`}
                labelClassName="pointer-events-none absolute left-0 top-0 origin-[0_0] border-transparent px-3 pt-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-3 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:peer-focus:text-primary"
                id="lastName"
                placeholder="Your Last name"
                register={register}
                icon={getSVGComponent(<EmailIcon />)}
                errors={errors}
              />
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
                className="flex mt-14 w-full justify-center m-auto max-w-md rounded-full border-2 border-blue-600 bg-black transition ease-in-out delay-100 duration-300 hover:text-white text-blue-600 hover:bg-blue-600 p-3 text-center"
              >
                {isLoading ? "Loading..." : "Sign up"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
