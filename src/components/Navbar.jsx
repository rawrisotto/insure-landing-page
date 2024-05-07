import { useEffect, useState } from "react";
import logo from "/images/logo.svg";
import hamburger from "/images/icon-hamburger.svg";
import close from "/images/icon-close.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    console.log("Opening")
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <header className="flex items-center justify-between py-5 px-6 lg:px-28 xl:px-44 relative">
      <h1 className="cursor-pointer">
        <img className="h-5" src={logo} alt="Insure Logo" />
      </h1>
      <button className="lg:hidden" onClick={() => handleMenuOpen()}>
        <img src={menuOpen ? close : hamburger} alt="Hamburger Menu" />
      </button>
      <nav
        className={
          "absolute z-50 lg:relative top-[100%] left-0 w-full lg:w-fit" +
          (menuOpen ? " h-[520px] py-10" : " h-0") +
          " lg:h-fit transition-all lg:transition-none duration-500 overflow-hidden bg-nav-menu lg:bg-none bg-no-repeat bg-contain bg-bottom bg-neutral-800 lg:bg-inherit"
        }
      >
        <ul className="flex flex-col items-center lg:flex-row text-center gap-8 font-heading text-lg text-neutral-100 lg:text-neutral-400">
          <li className="uppercase cursor-pointer hover:text-neutral-800 tracking-widest lg:tracking-wide text-xl lg:text-base">
            How We Work
          </li>
          <li className="uppercase cursor-pointer hover:text-neutral-800 tracking-widest lg:tracking-wide text-xl lg:text-base">
            Blog
          </li>
          <li className="uppercase cursor-pointer hover:text-neutral-800 tracking-widest lg:tracking-wide text-xl lg:text-base">
            Account
          </li>
          <li>
            <button className="uppercase cursor-pointer tracking-widest lg:tracking-wide text-xl lg:text-base border-2 border-neutral-100 lg:border-primary-700 border-solid py-2 px-7">
              View Plans
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// "absolute top-[100%] left-0 w-full" +
//           (menuOpen ? " h-[520px] py-10" : " h-0") +
//           " transition-all duration-500 overflow-hidden bg-nav-menu bg-no-repeat bg-bottom bg-neutral-800 lg:relative"
