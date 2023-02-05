import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


import {
  CategoryIcon,
  FireIcon,
  MostSellIcon,
  ShevronIcon,
} from "../icons/icons";
import SideBarMenu from "./SideBarMenu";
import { DropDownNavbar } from "./dropdownnavbar/DropDownNavbar";

const NavRight = () => {
  return (
    <div className="right_section">
      <div className="d-block d-sm-none">
            <SideBarMenu/>
      </div>
    <Link href="/">
    <div className="logo_wrapper d-none d-sm-block">
        <Image
          src="/logo.png"
          alt="vitsell"
          width={40}
          height={40}
        />
      </div>
    </Link>
      <div className="nav_menu  d-none d-sm-block">
        <ul className="links_list">
          <li className="category ">
            <span>
              <CategoryIcon />
            </span>
            <span>دسته بندی ها</span>
            <span>
              <ShevronIcon />
            </span>
            <DropDownNavbar/>
          </li>
          <li>
            <span>
              <FireIcon color="#4F4F4F" />
            </span>
            <span>پرفروش ترین ها</span>
          </li>
          <li>
            <span>
              <MostSellIcon />
            </span>
            <span>تخفیف دار ها</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavRight;
