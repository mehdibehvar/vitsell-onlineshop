import Image from "next/image";
import React from "react";
import { Col, Row } from "reactstrap";
const ProducsBanner = () => {
  return (
    <Row className="products_banner mt-3 gx-lg-3  gy-2 gy-lg-0">
      <Col xs="12" sm="6" md="6" lg="6" xl="6" className="right_col">
        <div className="banner_wrapper">
          {" "}
          <Image src="/assets/images/image 29 (1).png" alt="banner1" fill />
        </div>
      </Col>
      <Col xs="12" sm="6" md="6" lg="6" xl="6" className="left_col">
        <div className="banner_wrapper">
          <Image src="/assets/images/image 28 (1).png" alt="banner1" fill />
        </div>
      </Col>
    </Row>
  );
};

export default ProducsBanner;
