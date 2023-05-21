export type ToastTypes = "success" | "error" | "warning" | undefined;

export type ToastInfo = {
  message: string;
  type: ToastTypes;
};

export type ToastInfoTypes = {
  toastInfo: ToastInfo;
};
