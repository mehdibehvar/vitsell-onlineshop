import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import SearchInput from "./navbar/SearchInput";
import { TickIcon } from "./icons/icons";
import Link from "next/link";
import MultiRangeSlider from "./common/multiRange";

const ProductsSidebar = () => {

  const [open, setOpen] = useState<number>(3);
  const handleOpenAccordion = (id: number) => {
    if (open === id) {
      setOpen(0);
    } else {
      setOpen(id);
    }
  };
  return (
    <aside className="products_sidebar d-none d-sm-block ">
      <div className="filters_header">
        <h3 className="fs-14">فیلترها</h3>
      </div>
      <div className="list accordion d-flex flex-column gap-3">
        <div
          className={`${
            open === 1 ? "open_accordion" : ""
          } accordion_item  d-flex flex-column w-100`}
        >
          <div
            onClick={() => handleOpenAccordion(1)}
            className="accordion_header d-flex justify-content-between w-100"
          >
            <span className="type me-1 fs-14 text-gray">همه کالاها</span>
            <span className="arrow">
              <FiChevronDown />{" "}
            </span>
          </div>
          <div className="accordion_body d-flex flex-column gap-3 mt-3 w-100">
            <div className="w-100">
              <SearchInput />
            </div>
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="w-100">
                <Link href="/products/poshak">
                  <div className="d-flex gap-1 text-gray align-items-center">
                    <span>
                      <TickIcon />
                    </span>
                    <span className="fs-12">مد و پوشاک</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* ///item2///// */}
        <div
          className={`${
            open === 2 ? "open_accordion" : ""
          } accordion_item  d-flex flex-column w-100`}
        >
          <div
            onClick={() => handleOpenAccordion(2)}
            className="accordion_header d-flex justify-content-between w-100"
          >
            <span className="type me-1 fs-14 text-gray">برند</span>
            <span className="arrow">
              <FiChevronDown />{" "}
            </span>
          </div>
          <div className="accordion_body d-flex flex-column gap-3 mt-3 w-100">
            <div className="w-100">
              <SearchInput />
            </div>
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="w-100">
                <Link href="/products/poshak">
                  <div className="d-flex gap-1 text-gray align-items-center">
                    <span>
                      <TickIcon />
                    </span>
                    <span className="fs-12">مد و پوشاک</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* ///item3///// */}
        <div
          className={`${
            open === 3 ? "open_accordion" : ""
          } accordion_item  d-flex flex-column w-100`}
        >
          <div
            onClick={() => handleOpenAccordion(3)}
            className="accordion_header d-flex justify-content-between w-100"
          >
            <span className="type me-1 fs-14 text-gray">محدوده قیمت</span>
            <span className="arrow">
              <FiChevronDown />{" "}
            </span>
          </div>
          <div className="accordion_body d-flex flex-column gap-3 mt-3 w-100">
            <ul className="d-flex flex-column align-items-center range-menu">
              <MultiRangeSlider
                min={9000}
                max={12238000}
                onChange={({ min, max }) => {
                  min + max;
                }}
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="available_products">
        <span className="text fs-14">فقط محصولات موجود</span>
        <div className="checkbox_wrapper">
          <input type="checkbox" checked={true} />
          <span className="checkmark"></span>
        </div>
      </div>
    </aside>
  );
};

export default ProductsSidebar;


