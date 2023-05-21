import ToastSuccess from "../../assets/svgs/ToastSuccess";
import ToastError from "../../assets/svgs/ToastError";
import ToastWarning from "../../assets/svgs/ToastWarning";

export const typeToIconMapper: {
  [key: string]: React.JSX.Element;
} = {
  success: <ToastSuccess />,
  error: <ToastError />,
  warning: <ToastWarning />,
};

export const typeToColorMapper: {
  [key: string]: "green" | "red" | "orange";
} = {
  success: "green",
  error: "red",
  warning: "orange",
};
