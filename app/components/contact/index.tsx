import bg from "@/app/global/assets/images/contact-bg.jpg";
import { navigation } from "@/app/global/constants";
import ContactForm from "./ContactForm";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-screen flex flex-col justify-center backdrop-blur-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-center flex flex-col justify-center px-10 lg:px-32">
          <h1 className="font-[FaseBulan] text-8xl mt-20">Contact Us</h1>
          <p className="font-[Electronic] text-xl">
            We value your feedback and are always looking for ways to improve
            our services. If you have any complaints, discrepancies, or anything
            else you would like to share with us, please use the form.
          </p>
        </div>
        <div className="h-screen w-full px-5 md:px-16 py-16">
          <div className="h-full w-full bg-black pt-3">
            <div className="h-full flex flex-col justify-evenly">
              <div className="flex space-x-4 mx-auto justify-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={"rounded-md px-3 py-2 text-sm font-medium"}
                    aria-current={
                      item.name === "Contact Us" ? "page" : undefined
                    }
                  >
                    <span
                      className={`${
                        item.name === "Contact Us" && "active-link"
                      } link link-underline pb-1`}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
