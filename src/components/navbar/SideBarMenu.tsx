import { DiscountIcon, FireIcon, MenuIcon, QuestionIcon, SearchIcon } from "../icons/icons";
import { useRef, useState, useEffect } from "react";
import { categoriesData } from "../constant/data";
import Link from "next/link";
import { SidebarCategory } from "./sidebarCategory";
import Input from "../common/Input";
import MobileHeader from "../MobileHeader";

const SideBarMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLElement>(null);
  const handleShowMenu = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    const handleCloseMenu = (e: MouseEvent) => {
      if (
        showMenu &&
        menuIconRef.current&&
        !menuIconRef.current.contains(e.target as Node) &&
        !categoryRef.current?.contains(e.target as Node)&&
        !searchRef.current?.contains(e.target as Node)
      ) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleCloseMenu);

    return () => {
      window.removeEventListener("click", handleCloseMenu);
    };
  }, [showMenu]);

  return (
    <>
      <div ref={menuIconRef} onClick={handleShowMenu}>
        <MenuIcon />
      </div>
      {showMenu && (
        <div className="fade_section position-absolute h-vh opacity-0 bottom-0 z-index-1 w-100 top-0 left-0  bg-dark"></div>
      )}
      {showMenu && (
        <section
          ref={menuRef}
          className="dropdown_mobile_menu position-absolute top-0 z-index-1 overflow-scroll d-flex flex-column  p-2 gap-2"
        >
          <MobileHeader/>
          <section ref={searchRef} className="search_section d-flex align-items-center gap-2 p-2">
            <div><MenuIcon /></div>
           <Input placeholder="جستجو..." icon={<SearchIcon/>} className="sidebar_search w-100"/>
          </section>
          <section className="top_section d-flex flex-column mt-2">
            <Link href="/products/discounts">
              {" "}
              <div className="d-flex gap-1">
                <span>
                  <DiscountIcon />
                </span>
                <span >تخفیف دار ها</span>
              </div>
            </Link>
            <Link href="/products/bestselling">
              {" "}
              <div className="d-flex gap-1">
                <span>
                  <FireIcon color="#4F4F4F" />
                </span>
                <span> پرفروش ترین ها</span>
              </div>
            </Link>
            <Link href="/faq">
              {" "}
              <div className="d-flex gap-1">
                <span>
                  <QuestionIcon />
                </span>
                <span>سوالی دارید؟</span>
              </div>
            </Link>
          </section>
          <section ref={categoryRef} className="category_section">
            <h3 className="fs-14 fw-bold text-black-3">دسته بندی کالاها</h3>
            <ul  className="categoryies_list d-flex flex-column gap-2 p-0 mt-2 overflow-scroll">
            {categoriesData.map((item,index)=><SidebarCategory index={index} key={index} category={item}/>)}
        </ul>
          </section>
        </section>
      )}
    </>
  );
};

export default SideBarMenu;
