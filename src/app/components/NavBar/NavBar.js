"use client";
import React from "react";
import Search from "../Search/Search";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const navigateToRootLayout = (event) => {
    event.preventDefault(); // Prevents the default anchor behavior
    router.push("/"); // Navigates to the root layout
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-xl"
          href="/"
          onClick={navigateToRootLayout}
        >
          NextJS
        </a>
      </div>
      <div className="flex-none gap-2">
        <Search />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
