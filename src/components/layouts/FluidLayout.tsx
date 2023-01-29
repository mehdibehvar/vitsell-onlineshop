import React from "react";
import { Container, Row } from "reactstrap";
import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import Meta from "../Meta";
import Footer from "../footer/Footer";

const FluidLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Meta
        title="ویتسل انلاین شاپ"
        keywords="vitsell,onlineshope,bestprice"
        description="خرید ارزان و با کیفیت"
      /> 
      <Container fluid className="products_layout">
        <Row className="m-0">
          <Navbar/>
        </Row>
        {children}
        <Container>
          <Footer/>
        </Container>
      </Container>
    </>
  );
};

export default FluidLayout;
