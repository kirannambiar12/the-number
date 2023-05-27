export const nonVisibleNavRoutes = ["/login", "/contact-us"];

export const navigation = [
  { name: "About Us", href: "/about-us", current: true },
  { name: "Contact Us", href: "/contact-us", current: false },
  { name: "Our Vision", href: "/vision", current: false },
];

export const contactUsNav = [
  { name: "Home", href: "/", current: false },
  ...navigation,
];
