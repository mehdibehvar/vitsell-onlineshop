import React from "react";
import { Container, Row } from "reactstrap";
import { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Meta from "./Meta";
import Footer from "./footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Meta title="ویتسل انلاین شاپ" keywords="vitsell,onlineshope,bestprice" description="خرید ارزان و با کیفیت"/>
      <Container fluid className="main_layout">
        <Container  className="layout_container p-md-0">
          <Row className="mb-3">
          
           <Navbar />
        
          </Row>
          <main>{children}</main>
          <Footer/>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
