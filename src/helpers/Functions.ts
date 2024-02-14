import { toast } from "react-toastify";

export const notify = (status: string, massage: string) => {
  switch (status) {
    case "success":
      toast.success(massage);
      break;
    case "warning":
      toast.warning(massage);
      break;
    case "error":
      toast.error(massage);
      break;
  }
};

export const storeInLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
