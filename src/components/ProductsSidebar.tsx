import React, { useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Menu, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import SearchInput from "./navbar/SearchInput";
import { TickIcon } from "./icons/icons";
import Link from "next/link";

import MultiRangeSlider from "./common/multiRange";
const ProductsSidebar = () => {
  const menuItem1 = useRef<HTMLDivElement>(null);
  const handleActiveItem = (e: React.MouseEvent) => {
    console.log(e);
    menuItem1.current?.classList.add("active_item");
  };
  return (
    <aside className="products_sidebar d-none d-sm-block ">
      <div className="header">
        <h3>فیلترها</h3>
      </div>
      <div className="list">
        <div className="filter_type">
          <Menu
            menuClassName="my-menu"
            menuButton={
              <MenuButton onClick={handleActiveItem}>
                {" "}
                <div ref={menuItem1} className="type">
                  <span>همه کالاها</span>
                  <span className="arrow">
                    <FiChevronDown />
                  </span>
                </div>
              </MenuButton>
            }
            transition
          >
            <li>
              <SearchInput />
            </li>
            <li>
              <Link href="/products/poshak">
                <div className="menu_item">
                  <span>
                    <TickIcon />
                  </span>
                  <span>مد و پوشاک</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/products/poshak">
                <div className="menu_item">
                  <span>
                    <TickIcon />
                  </span>
                  <span>مد و پوشاک</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/products/poshak">
                <div className="menu_item">
                  <span>
                    <TickIcon />
                  </span>
                  <span>مد و پوشاک</span>
                </div>
              </Link>
            </li>
          </Menu>
        </div>
        <div className="filter_type">
          <Menu
            menuClassName="my-menu"
            menuButton={
              <MenuButton onClick={handleActiveItem}>
                {" "}
                <div ref={menuItem1} className="type">
                  <span>برند </span>
                  <span className="arrow">
                    <FiChevronDown />
                  </span>
                </div>
              </MenuButton>
            }
            transition
          >
            <li>
              <SearchInput />
            </li>
            <li>
              <Link href="/products/poshak">
                <div className="menu_item">
                  <span>
                    <TickIcon />
                  </span>
                  <span>مد و پوشاک</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/products/poshak">
                <div className="menu_item">
                  <span>
                    <TickIcon />
                  </span>
                  <span>مد و پوشاک</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/products/poshak">
                <div className="menu_item">
                  <span>
                    <TickIcon />
                  </span>
                  <span>مد و پوشاک</span>
                </div>
              </Link>
            </li>
          </Menu>
        </div>
        <div className="filter_type price_range">
          <Menu
            menuClassName="range-menu"
            menuButton={
              <MenuButton>
                {" "}
                <div className="type">
                  {" "}
                  <span>محدوده قیمت</span>
                  <span className="arrow">
                    <FiChevronDown />
                  </span>
                </div>
              </MenuButton>
            }
            transition
          >
            <MultiRangeSlider
              min={9000}
              max={12238000}
              onChange={({ min, max }) => {
                min + max;
              }}
            />
          </Menu>
        </div>
      </div>
      <div className="available_products">
        <span className="text">فقط محصولات موجود</span>
        <div className="checkbox_wrapper">
          <input type="checkbox" checked={true} />
          <span className="checkmark"></span>
        </div>
      </div>
    </aside>
  );
};

export default ProductsSidebar;
