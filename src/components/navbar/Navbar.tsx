
import React from "react";
import MobileHeader from "../MobileHeader";
import NavRight from "./NavRight";
import NavLeft from "./NavLeft";
import { Col } from "reactstrap";
const Navbar = () => {
  return (
    <>
  <Col sm="12">  <MobileHeader /></Col>
   <Col>
     <nav className="navbar">
     <NavRight/>
     <NavLeft/>
      </nav>
   </Col>
    </>
  );
};

export default Navbar;
