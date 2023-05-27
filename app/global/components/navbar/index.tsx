import { Disclosure } from "@headlessui/react";
import { useNav } from "../../hooks/auth/useNav";
import { navigation } from "../../constants";

export default function Navbar() {
  const { isNavVisible } = useNav();
  if (!isNavVisible) return null;
  return (
    <Disclosure as="nav" className="pt-5 bg-repeat">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <p>X</p> : <p>0</p>}
                </Disclosure.Button>
              </div>
              <div className="flex flex-row w-screen">
                <div className="basis-1/8 flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden relative -left-7 sm:block mx-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={"rounded-md px-3 py-2 text-sm font-medium"}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <span
                          className={`${
                            item.current && "active-link"
                          } link link-underline pb-1`}
                        >
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={"block rounded-md px-3 py-2 text-base font-medium"}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
