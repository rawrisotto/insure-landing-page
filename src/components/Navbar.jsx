import { useState } from "react";
import logo from "/images/logo.svg";
import hamburger from "/images/icon-hamburger.svg";
import close from "/images/icon-close.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="flex items-center justify-between py-8 px-6 border-b-2 relative">
      <h1 className="cursor-pointer">
        <img className="h-5" src={logo} alt="Insure Logo" />
      </h1>
      <button className="md:hidden" onClick={() => handleMenuOpen()}>
        <img src={menuOpen ? close : hamburger} alt="Hamburger Menu" />
      </button>
      <nav
        className={
          "absolute top-[100%] left-0 w-full" +
          (menuOpen ? " h-[520px] py-10" : " h-0") +
          " transition-all duration-500 overflow-hidden bg-nav-menu bg-no-repeat bg-bottom bg-neutral-800"
        }
      >
        <ul className="flex flex-col text-center gap-8 font-heading text-lg text-neutral-100">
          <li className="uppercase cursor-pointer hover:text-neutral-800">
            How We Work
          </li>
          <li className="uppercase cursor-pointer hover:text-neutral-800">
            Blog
          </li>
          <li className="uppercase cursor-pointer hover:text-neutral-800">
            Account
          </li>
          <li className="uppercase cursor-pointer hover:text-neutral-800">
            View Plans
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// absolute top-[100%] left-0 h-0 overflow-hidden w-full py-10 bg-nav-menu bg-no-repeat bg-bottom bg-neutral-800
