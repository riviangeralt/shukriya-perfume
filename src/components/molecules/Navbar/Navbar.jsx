import React, { useState } from "react";
import { CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { LogoPng } from "../../../assets/images";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navList = [
    {
      label: "Collections",
      subMenu: [
        { label: "Western Winds" },
        { label: "All Attars" },
        { label: "All Perfumes" },
        { label: "East Meets The West" },
        { label: "Easterbn Treasure" },
        { label: "Discovery Sets" },
      ],
    },
    {
      label: "Shop",
    },
    {
      label: "About Us",
      subMenu: [
        { label: "Our Story" },
        { label: "Our Founders" },
        { label: "Our Logo" },
      ],
    },
    {
      label: "Blogs",
    },
    {
      label: "Why Us",
    },
    {
      label: "Faq",
    },
    {
      label: "INR",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex h-[76px] p-4 items-center justify-between sticky top-0 bg-white z-[100] border-b border-gray">
      <div className="flex flex-col justify-center items-center scale-[0.7] cursor-pointer">
        <img src={LogoPng} alt="logo" className="w-[3rem] h-[3rem]" />
        <p className="font-bold text-4xl tracking-normal uppercase leading-none">
          Shukriya
        </p>
        <p className="font-bold text-lg tracking-widest uppercase leading-none mt-[-12px]">
          Perfumerie
        </p>
      </div>
      <ul className="gap-4 hidden md:flex">
        {navList.map((item, index) => (
          <li key={index} className="flex cursor-pointer group items-center">
            <p className="uppercase tracking-wider md:text-xl lg:text-2xl !leading-none relative after:absolute after:content-[''] after:w-full after:h-[76px] after:top-[-20px] after:left-0">
              {item.label}
            </p>

            {item.subMenu && <IoIosArrowDown className="text-sm -mt-1.5" />}

            {item.subMenu && (
              <ul className="group-hover:grid grid-cols-3 p-4 hidden absolute top-[76px] left-0 w-full bg-white z-20 ease-in-out duration-300 translate-x-0 shadow cursor-default">
                {item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="cursor-pointer uppercase tracking-wider text-2xl"
                  >
                    {subItem.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <CiSearch className="text-2xl cursor-pointer" />
        <CiUser className="text-2xl cursor-pointer" />
        <CiShoppingCart className="text-2xl cursor-pointer" />
        <CiMenuBurger
          className="text-2xl cursor-pointer md:hidden block"
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="fixed top-[76px] left-0 w-full h-full bg-black opacity-50 z-10"></div>
      )}
      {/* enter from left */}
      {isMenuOpen && (
        <div className="fixed top-[76px] left-0 w-full h-full bg-white z-20 ease-in-out duration-300 translate-x-0">
          <ul className="flex flex-col gap-4 p-4">
            {navList.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer uppercase tracking-wider text-2xl"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
