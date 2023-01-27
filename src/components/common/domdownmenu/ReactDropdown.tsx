import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import { MenuIcon, ShevronIcon } from "../../icons/icons";

import Link from "next/link";
import { menuItems } from "../../constant/data";

function ReactDropdown({ direction, ...args }: { direction: any}) {
  console.log(args);
  console.log(direction);
  
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openSub, setOpensub] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
const handleOpenSubmenu=()=>{
setOpensub((prev)=>!prev)
}
  return (
    <div className="d-flex p-0">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle tag={"span"} cssModule={{ btn: "hambergur_menu_button" }}>
          {" "}
          <MenuIcon />
        </DropdownToggle>
        <DropdownMenu {...args}>
          {menuItems.map((item,index)=><DropdownItem key={index}>
            {" "}
           <div className="item">
           <Link href={item.url}>
           <div>
              <span>{item.title}</span>
            </div>
           </Link>
            <span onClick={handleOpenSubmenu}>
              <ShevronIcon />
            </span>
           </div>
           <div className="submenu">
            <ul className={`submenu_list ${openSub?"showsub":''}`}>
              {item.submenu.map((sub,index)=><li key={index}>
                <Link href={sub.title}>{sub.title}</Link>
              </li>)}
            </ul>
           </div>
          </DropdownItem>)}

         
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

ReactDropdown.propTypes = {
  direction: PropTypes.string,
};

export default ReactDropdown;
