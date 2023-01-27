
import React from "react";
import MobileHeader from "../MobileHeader";
import NavRight from "./NavRight";
import NavLeft from "./NavLeft";
import { Col } from "reactstrap";
const Navbar = () => {
  return (
    <>
    <MobileHeader />
   <Col className="px-0">
     <nav className="navbar">
     <NavRight/>
     <NavLeft/>
      </nav>
   </Col>
    </>
  );
};

export default Navbar;
