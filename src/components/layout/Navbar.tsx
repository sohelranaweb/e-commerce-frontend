"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart, Search, Mail, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const user = data?.data;

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  console.log("user", user);

  return (
    <header className="w-full shadow ">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm px-4 py-1 ">
        {/* Topbar container */}
        <div className=" w-full lg:max-w-9/12 mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          {/* Left Section */}
          <div className="flex justify-center items-center gap-4 overflow-x-auto whitespace-nowrap">
            <span>English</span>
            <span className="flex items-center">
              <Mail className="h-3 w-3 mr-1" />
              example@gmail.com
            </span>{" "}
            |
            <span className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              4534345656
            </span>
          </div>

          {/* Right Section */}
          <div className="flex justify-center sm:justify-end gap-4">
            <a href="#">BE A SELLER</a> |
            {user?.email && (
              <Link onClick={handleLogout} to="/login">
                LOGOUT{" "}
              </Link>
            )}
            {!user?.email && <Link to="/login">LOGIN </Link>}|
            <Link to="/register">REGISTER</Link>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full lg:max-w-9/12 mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="text-xl font-bold">Site Logo</div>

        {/* Search Bar */}
        <div className="hidden md:flex w-1/2">
          <input
            type="text"
            placeholder="Search Here"
            className="flex-grow rounded-l-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          <button
            type="submit"
            className="flex items-center justify-center rounded-r-md px-4"
            style={{ backgroundColor: "#470096" }}
          >
            <Search className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Account & Cart */}
        <div className="flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <div className="flex flex-col items-start">
                    <p className="text-[12px] font-medium">
                      Hello, {user ? <span>{user.name}</span> : ""}
                    </p>
                    <p className="text-sm text-gray-500">My Account</p>
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
                  {user && user.role === "SUPER_ADMIN" ? (
                    <>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                    </>
                  ) : (
                    user && (
                      <>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          WishList
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Orders
                        </a>
                      </>
                    )
                  )}
                  {user ? (
                    <Link
                      to="/login"
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </Link>
                  ) : (
                    ""
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-1 cursor-pointer">
            <ShoppingCart /> Cart
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-2 md:hidden">
        <div className="flex">
          <input
            type="text"
            placeholder="Search Here"
            className="flex-grow rounded-l-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          <button
            type="submit"
            className="flex items-center justify-center rounded-r-md px-4"
            style={{ backgroundColor: "#470096" }}
          >
            <Search className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Nav Links */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div
          className={`w-full lg:max-w-9/12 mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2 text-sm font-medium transition-all ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {/* Left side */}
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#" className="font-semibold text-purple-700">
                DISCOVER PRODUCTS
              </a>
            </li>
            <li>
              <a href="#">CATEGORIES</a>
            </li>
            <li>
              <a href="#">BRANDS</a>
            </li>
            <li>
              <a href="#">HOT DEALS</a>
            </li>
          </ul>

          {/* Right side */}
          <ul className="flex flex-col md:flex-row gap-4 mt-2 md:mt-0">
            <li>
              <a href="#">TRACK ORDER</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">HELP</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
