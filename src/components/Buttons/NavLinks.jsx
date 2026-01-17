"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, children }) => {
  const path = usePathname();
  const isActive =
    href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`);
  return (
    <li>
      <Link
        href={href}
        className={`${
          isActive ? "text-accent underline" : ""
        } hover:bg-transparent`}>
        {children}
      </Link>
    </li>
  );
};

export default NavLinks;
