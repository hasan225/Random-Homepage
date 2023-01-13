import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import useScrollPosition from "../../hooks/useScrollPosition";
import { NavItems, Signing } from "../../Data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  // const scrolls = useScrollPosition();
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  return (
    <nav className={`navbar ${scroll ? "bg-gray-800" : ""}`}>
      <div className="logo text-3xl uppercase py-8">
        <Link className="text-white" to="/">
          Logo
        </Link>
      </div>
      <button
        className="hidden lg:block text-white z-50 text-2xl"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
      <ul
        className={`nav-items ${
          open ? "lg:translate-x-0" : "lg:translate-x-full"
        }`}
      >
        {NavItems.map((nav, i) => {
          return (
            <li key={i}>
              <Link
                className="text-white text-lg hover:text-emerald-600 duration-300 font-semibold capitalize"
                to={nav.path}
              >
                {nav.title}
              </Link>
            </li>
          );
        })}

        <div className="signing flex-middle gap-4 hidden lg:flex flex-col">
          {Signing.map((option, i) => {
            return (
              <Link key={i} className={`${option.cls} capitalize`} to="/">
                {option.title}
              </Link>
            );
          })}
        </div>
      </ul>
      <div className="signing flex-middle gap-4 lg:hidden">
        {Signing.map((option, i) => {
          return (
            <Link key={i} className={`${option.cls} capitalize`} to="/">
              {option.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
