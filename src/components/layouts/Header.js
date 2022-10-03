/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from "react";
import { Popover, Menu, Transition, Disclosure } from "@headlessui/react";
import Link from "next/link";

import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";
import store from "../../../store";
import { loadUser, logout } from "../../actions/userActions";

import { useRouter } from "next/router";

import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Team", href: "/team", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Calendar", href: "/calendar", current: false },
  { name: "Reports", href: "/reports", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const HandleLogout = () => {
    dispatch(logout());

    router.push("/login");
  };

  const userNavigation = [
    { name: user?.name, href: "/me" },
    { name: "Settings", href: "/settings" },
    { name: "Sign out", href: "/login", action: HandleLogout },
  ];

  return (
    <>
      <div className="min-h-full mb-2">
        <Disclosure as="nav" className="bg-teal-900">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link Link href="/">
                        <Image
                          className="h-8 w-8 bg-teal-50 rounded-xl object-contain "
                          src="/ishnaaz-Recovered.png"
                          alt="Your Company"
                          width="50"
                          height="50"
                          layout="fixed"
                          priority="true"
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link key={item.href} href={item.href}>
                            <a
                              className={classNames(
                                item.current
                                  ? "bg-teal-800 text-white"
                                  : "text-teal-100 hover:bg-teal-700 hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full bg-teal-800 p-1 text-teal-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>{" "}
                      {user ? (
                        <Menu as="div" className="relative ml-3 z-40">
                          <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-teal-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={user.avatar && user.avatar.url}
                                alt=""
                              />
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
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.href}>
                                  {({ active }) => (
                                    <Link href={item.href}>
                                      <a
                                        onClick={item.action}
                                        className={classNames(
                                          active ? "bg-teal-100" : "",
                                          "block px-4 py-2 text-sm text-teal-900"
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        !loading && (
                          <div className="hidden md:flex ml-3 items-center justify-end md:flex-1 lg:w-0">
                            <Link href="/login">
                              <a className="whitespace-nowrap text-base font-medium text-gray-50 hover:text-gray-900">
                                Sign in
                              </a>
                            </Link>
                            <Link href="/register">
                              <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700">
                                Sign up
                              </a>
                            </Link>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-teal-800 p-2 text-teal-400 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.href}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-teal-900 text-white"
                          : "text-teal-300 hover:bg-teal-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

                {user ? (
                  <div className="border-t border-teal-700 pt-4 pb-3">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.avatar && user.avatar.url}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-teal-400">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-teal-800 p-1 text-teal-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.href}
                          as="a"
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-teal-400 hover:bg-teal-700 hover:text-white"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  !loading && (
                    <div className="border-t border-teal-700 pt-4 pb-3">
                      <Link href="/login">
                        <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700">
                          Sign in
                        </a>
                      </Link>
                      <Link href="/register">
                        <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-teal-900 bg-teal-50 hover:bg-teal-700">
                          Sign up
                        </a>
                      </Link>
                    </div>
                  )
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
