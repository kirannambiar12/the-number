import { Disclosure } from "@headlessui/react";
import { useNav } from "../../hooks/auth/useNav";
import { navigation } from "../../constants";
import { useRouter } from "next/router";
import logo from "@/app/global/assets/gif/logo.gif";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { pathname, push } = useRouter();
  const { isNavVisible } = useNav();
  if (!isNavVisible) return null;
  return (
    <Disclosure as="nav" className="pt-5 absolute top-0 left-0 w-screen">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <p>X</p> : <p>0</p>}
                </Disclosure.Button> */}
              </div>
              <div className="flex flex-row w-screen">
                <div className="basis-1/8 flex flex-shrink-0 items-center">
                  <Image
                    onClick={() => push("/")}
                    className="block h-8 w-auto lg:hidden cursor-pointer"
                    src={logo}
                    alt="The Number Logo"
                  />
                  <Image
                    onClick={() => push("/")}
                    className="hidden h-8 w-auto lg:block cursor-pointer"
                    src={logo}
                    alt="The Number Logo"
                  />
                </div>
                <div className="hidden relative -left-7 sm:block mx-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={"rounded-md px-3 py-2 text-sm font-medium"}
                        aria-current={
                          pathname === item.href ? "page" : undefined
                        }
                      >
                        <span
                          className={`${
                            pathname === item.href && "active-link"
                          } link link-underline pb-1`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <Link
                    href="/login"
                    className={"rounded-md px-3 py-2 text-sm font-medium"}
                  >
                    <span
                      className={`${
                        pathname === "/login" && "active-link"
                      } link link-underline pb-1`}
                    >
                      Login
                    </span>
                  </Link>
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
