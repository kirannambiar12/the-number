import bg from "@/app/global/assets/images/contact-bg.jpg";
import ContactForm from "./Form";
import { navigation } from "@/app/global/constants";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen flex flex-col justify-center backdrop-blur-md"
    >
      <div className="grid grid-cols-2">
        <div className="text-center flex flex-col justify-center px-32">
          <h1 className="font-[FaseBulan] text-8xl">Contact Us</h1>
          <p className="font-[Electronic] text-xl">
            We value your feedback and are always looking for ways to improve
            our services. If you have any complaints, discrepancies, or anything
            else you would like to share with us, please use the form.
          </p>
        </div>
        <div className="h-screen w-full px-16 py-16">
          <div className="h-full w-full bg-black pt-3">
            <div className="h-full flex flex-col justify-evenly">
              <div className="flex space-x-4 mx-auto justify-center">
                {navigation.map((item) => (
                  <a
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
                  </a>
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
