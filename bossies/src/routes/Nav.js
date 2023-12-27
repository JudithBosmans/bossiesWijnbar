import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Over ons", href: "#about", current: false },
  { name: "QA", href: "#qa", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {" "}
            {/* Make the container relative */}
            <div className="flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute top-0 left-0 z-30 flex items-center sm:hidden">
                {" "}
                {/* Adjust positioning */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo (center on mobile) */}
              <div className="flex-1 flex items-center justify-center sm:justify-start">
                {" "}
                {/* Adjust flex properties */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  {" "}
                  {/* Center on mobile */}
                  <a href="https://ibb.co/dgzCGZ4">
                    <img
                      src="https://i.ibb.co/NSHDZR2/logo-wijnbar-zonder-Cirkel.png"
                      alt="logo-wijnbar-zonder-Cirkel"
                      className="h-12 w-auto"
                    />
                  </a>
                </div>
              </div>

              {/* Centered Navigation Links */}
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "text-gray-900" : "text-gray-500",
                        "rounded-md px-3 py-2 text-sm font-medium hover:text-gray-900 hover:underline"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
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
