export function getSVGComponent(
  svgComponent: React.JSX.Element
): React.JSX.Element {
  return svgComponent;
}

export function formatPhoneNumber(input: string) {
  // Remove any non-digit characters from the input
  const digitsOnly = input.replace(/\D/g, "");

  // Split the digits into groups using regex
  const groups = digitsOnly.match(/^(\d{4})(\d{3})(\d{3})$/);

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
