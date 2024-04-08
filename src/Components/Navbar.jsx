import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import NavLogo from "../Images/Exchmarket-Logo.png";
import {Link} from 'react-router-dom'

const navigation = [
  {
    name: "Home",
    href: "/",
    current: false,
    dropdown: false,
    dropdownList: {},
  },
  {
    name: "Online Betting Sites",
    href: "",
    current: false,
    dropdown: true,
    dropdownList: [
      {
        name: "GamesWalla .net",
        url: "",
      },
      {
        name: "SS Exchange",
        url: "",
      },
      {
        name: "Sky Exchange",
        url: "",
      },
      {
        name: "Hony777",
        url: "",
      },
      {
        name: "Lotusbook247",
        url: "",
      },
      {
        name: "Satfair",
        url: "",
      },
      {
        name: "Satsport 247",
        url: "",
      },
      {
        name: "Betxhub 247",
        url: "",
      },
      {
        name: "Diamond Exch",
        url: "",
      },
    ],
  },
  {
    name: "Games Sites",
    href: "",
    current: false,
    dropdown: true,
    dropdownList: [
      {
        name: "GamesWalla .net ",
        url: "",
      },
      {
        name: "Cricket Betting Sites",
        url: "",
      },
      {
        name: "Football Betting Site",
        url: "",
      },
      {
        name: " Pro kabaddi Betting ",
        url: "",
      },
      {
        name: "Tehnis Betting Sites",
        url: "",
      },
      {
        name: "Hockey Betting Sites",
        url: "",
      },
      {
        name: "Golf Betting Sites",
        url: "",
      },
      {
        name: "Online Casino Sites",
        url: "",
      },
    ],
  },
  {
    name: "Cricket Betting Sites",
    href: "",
    current: false,
    dropdown: true,
    dropdownList: [
      {
        name: "Cricket Betting Tips ",
        url: "",
      },
    ],
  },
  { name: "Blogs", href: "/Blogs", current: false, dropdown: false },
  {
    name: "Customer Feedback",
    href: "/Feedback",
    current: false,
    dropdown: false,
  },
  { name: "Contact Us", href: "ContactUs", current: false, dropdown: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-red-600 mx-2 rounded-md sticky top-1 z-10 border ">
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900  font-medium hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center  sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-24 w-auto"
                    src={NavLogo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex align-center space-x-4 ">
                    {navigation.map((item) =>
                      item.dropdown ? (
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex rounded-full ">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <span
                                key={item.name}
                                className={classNames("text-white text-sm xl:text-lg text-bold hover:text-black hover:underline underline-offset-8 ",
                                  "rounded-md px-3 py-2 text-sm font-medium"
                                )}
                              >
                                <span className="flex flex-1 text-sm xl:text-lg">
                                  {item.name}
                                  <ChevronDownIcon className="h-6 w-3.5 ml-1 text-white" />
                                </span>
                              </span>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {item.dropdownList.map(({ name, href }) => (
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to={href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-900 cursor-pointer"
                                      )}
                                    >
                                      {name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-200 text-white "
                              : "text-white text-sm xl:text-lg text-bold hover:text-black hover:underline underline-offset-8 ",
                            "rounded-md px-3 py-2  font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-200 p-1 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
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
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 hover:bg-gray-700 hover:text-white bg-white",
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
