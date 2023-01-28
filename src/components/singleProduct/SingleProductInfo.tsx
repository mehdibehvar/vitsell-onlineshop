import dynamic from "next/dynamic";
import { Col, Row } from "reactstrap";

import PricingSidebar from "./PricingSidebar";
import ProductFeatures from "./ProductFeatures";
import ProductGallery from "./ProductGallery";


const SingleProductInfo = () => {
  return (
    <Row>
      <Col className="p-1">
        <section className="single_product_info">
          <ProductGallery />
          <article className="product_info border-2 ">
            <ProductFeatures />
    
          </article>
          <PricingSidebar />
    
        </section>
    
      </Col>
    </Row>
  );
};

export default SingleProductInfo;
