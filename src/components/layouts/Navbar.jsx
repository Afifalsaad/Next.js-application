"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { toast, Zoom } from "react-toastify";

const Navbar = () => {
  const { data: session, status } = useSession();

  const userLoggedIn = status === "authenticated";

  return (
    <div>
      <div className="navbar bg-primary shadow-sm">
        <div className="navbar-start ml-3">
          <Link href="/" className="relative w-9 h-9">
            <Image src="/wildlife-conservation.png" fill alt="icon"></Image>
          </Link>
        </div>
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal">
            <Link href="/animals">
              <h2 className="text-accent hover:underline hover:cursor-pointer font-semibold mr-3 text-neutral-accent">
                All Animals
              </h2>
            </Link>
            <Link href="/addConcern">
              <h2 className="text-accent hover:underline hover:cursor-pointer font-semibold mr-3 text-neutral-accent">
                Add Concern
              </h2>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          {userLoggedIn ? (
            <button
              onClick={() => {
                signOut();
                toast.success("Logged Out!", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Zoom,
                });
              }}
              className="btn btn-neutral text-neutral-content">
              Log Out
            </button>
          ) : (
            <Link
              href="/login"
              className="btn btn-neutral text-neutral-content">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
