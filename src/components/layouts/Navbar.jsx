"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  const userLoggedIn = status === "authenticated";

  return (
    <div>
      <div className="navbar bg-primary shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul> */}
          </div>
          <Link
            href="/"
            className="btn btn-primary hover:bg-[#1e293b] hover:border-none text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal">
            <Link href="/animals">
              <h2 className="text-accent hover:underline hover:cursor-pointer font-semibold mr-3 text-neutral-accent">
                All Animals
              </h2>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          {userLoggedIn ? (
            <button
              onClick={() => {
                signOut();
              }}
              className="btn btn-neutral text-neutral-content">
              Log Out
            </button>
          ) : (
            <Link href="login" className="btn btn-neutral text-neutral-content">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
