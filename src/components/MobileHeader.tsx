import Link from "next/link";
import React from "react";
import { VitsellLogo } from "./icons/icons";


const MobileHeader = () => {
  return (
    <header className="mobile_header d-block d-sm-none">
      <div className="header_wrapper">
      <Link href="/">
           <div>
          <VitsellLogo width="24" height="24" />
        </div>
      </Link>
     
        <h1 className="header_title">ویتسل</h1>
      </div>
    </header>
  );
};

export default MobileHeader;
