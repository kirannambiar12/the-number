import { db } from "@/app/global/configStore/firebase";
import { format } from "date-fns";
import { doc, getDoc } from "firebase/firestore";
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
