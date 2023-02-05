import React, { useRef } from "react";
import { ICategories } from "../../../types";

import {
  ArmchairIcon,
  BabyIcon,
  BeautyIcon,
  BlouseIcon,
  PenIcon,
  ShopIcon,
  SportIcon,
} from "../icons/icons";
import { ShevronIcon } from "../icons/icons";
import SubCategory from "./dropdownnavbar/SubCategory";
import SidebarSubCategory from "./sidebarSubCategory";
// import SubCategory from "./SubCategory";

export const SidebarCategory = ({
  category,
  index,
}: {
  category: ICategories;
  index: number;
}) => {
  const { title, icon, subCategory } = category;
  const listitemref = useRef<HTMLLIElement>(null);
  const icons: any = {
    BlouseIcon: <BlouseIcon />,
    BabyIcon: <BabyIcon />,
    ShopIcon: <ShopIcon />,
    ArmchairIcon: <ArmchairIcon />,
    BeautyIcon: <BeautyIcon />,
    PenIcon: <PenIcon />,
    SportIcon: <SportIcon />,
  };
  const handleOpenCategory = () => {
    listitemref.current?.classList.toggle("showsub");
    listitemref.current?.classList.remove("active_link");
  };

  return (
    <li
      onClick={handleOpenCategory}
      ref={listitemref}
      className={`category d-flex flex-column  w-100`}
    >
<div className="header w-100 d-flex justify-content-between align-items-center w-100">
<div className="right d-flex gap-2">
        <span>{icons[icon]}</span>
        <span className="title fs-14 fw-400 text-gray">{title}</span>
      </div>
      <span className="arrow_left">
        <ShevronIcon />
      </span>
</div>
      <SidebarSubCategory subCategoryData={subCategory} />

    </li>
  );
};
