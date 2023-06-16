import { db } from "@/app/global/configStore/firebase";
import { format } from "date-fns";
import { doc, getDoc } from "firebase/firestore";
import { mobileNav } from "./constants";
export function getSVGComponent(
  svgComponent: React.JSX.Element
): React.JSX.Element {
  return svgComponent;
}

export function formatPhoneNumber(input: string) {
  // Remove any non-digit characters from the input
  const digitsOnly = input?.toString()?.replace(/\D/g, "");

  // Split the digits into groups using regex
  const groups = digitsOnly?.match(/^(\d{4})(\d{3})(\d{3})$/);

  if (groups) {
    // Format the digits into the desired format
    const formattedValue = groups.slice(1).join("-");
    return formattedValue;
  } else {
    // Return the original input if it doesn't match the expected pattern
    return input;
  }
}

export function isNumber(input: string) {
  const numberRegex = /^[0-9]+$/;
  return numberRegex.test(input);
}

export const getIsMaintenanceMode = async () => {
  const document = await getDoc(doc(db, "config", "vYAbIgAoZGQqEfCPNFXN"));
  const data = document.data();
  return data;
};

export const convertToDate = (timestamp: any) => {
  const date = timestamp.toDate();
  const formatedDate = format(date, "dd/MM/yyyy");
  return formatedDate;
};

export const getMobileNav = ({
  isAuth = false,
  logout,
}: {
  isAuth: boolean;
  logout: any;
}) => {
  const navData = mobileNav.filter((nav) => {
    if (!isAuth) return nav;
    if (nav.name !== "Login" && nav.name !== "Register") return nav;
  });

  const signOut = {
    name: "Logout",
    href: "",
    onClick: (e: any) => {
      e.preventDefault();
      logout();
    },
  };

  const loggedIn = [...navData].concat(signOut);
  return isAuth ? loggedIn : navData;
};
