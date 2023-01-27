import React from "react";
import { Col, Row } from "reactstrap";
import DisplayComments from "./DisplayComments";
import PricingSidebar from "./PricingSidebar";
import ProductIntroNavSection from "./ProductIntroNavSection";
import ProductSpicifications from "./ProductSpicifications";
import RegisterComment from "./RegisterComment";
import SellersList from "./SellersList";

const MostProductInfo = () => {
  return (
    <Row>
      <Col className="p-1">
        <section className="most_product_info">
          <article className="most_info">
            <section className="sellers_section d-none d-sm-block">
              <h3>فروشندگان این کالا</h3>
            <SellersList/>
            </section>
            <section className="product_nav_section ">
           <ProductIntroNavSection/>
            </section>
            <section className="product_specifics_section">
              <ProductSpicifications/>
            </section>
            <section className="comments_section w-100">
              <RegisterComment/>
              <DisplayComments/>
            </section>

            <section className="similar_products_section"></section>
          </article>
          <PricingSidebar />
        </section>
      </Col>
    </Row>
  );
};

export default MostProductInfo;
