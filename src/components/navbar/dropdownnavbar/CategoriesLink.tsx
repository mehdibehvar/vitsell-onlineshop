import React, { useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { ICategories } from "../../../../types";
import {
  ArmchairIcon,
  BabyIcon,
  BeautyIcon,
  BlouseIcon,
  PenIcon,
  ShopIcon,
  SportIcon,
} from "../../icons/icons";
import SubCategory from "./SubCategory";

export const CategoriesLink = ({
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
  const handleHoverLink = () => {
    listitemref.current?.classList.add("showsub");
    listitemref.current?.classList.remove("active_link");
  };
  const handleUnhoverLink = () => {
    listitemref.current?.classList.remove("showsub");
  };
  return (
    <li
      onMouseOver={handleHoverLink}
      onMouseLeave={handleUnhoverLink}
      ref={listitemref}
      className={`category_link ${index === 0 ? "active_link" : ""} `}
    >
      <div className="right">
        <span>{icons[icon]}</span>
        <span className="title">{title}</span>
      </div>
      <span className="arrow_left">
        <BsArrowLeft />
      </span>
      <SubCategory subCategoryData={subCategory} />
    </li>
  );
};
