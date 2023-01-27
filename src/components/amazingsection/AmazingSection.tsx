import React from "react";
import { Col, Row } from "reactstrap";
import SectionsHeader from "../common/SectionsHeader";
import Card from "../common/Card";
import { FireIcon } from "../icons/icons";
import AmazingGridSection from "./AmazingGridSection";
import AmazingSlider from "./AmazingSlider";
const ITEM = {
  url: "/assets/images/image 27 (1).png",
  alt: "همزن برقی Sanford",
  title: "همزن برقی Sanford",
  price: "۴,۳۴۳,۰۰۰",
};
const AmazingSection = () => {
  return (
    <Row className="amazing_section">
      <Row>
        <Col>
          {" "}
          <SectionsHeader
            link="/"
            title="پیشنهادات شگفت انگیر"
            icon={<FireIcon color="#D72339" />}
          />
        </Col>
      </Row>

      <Row>
        <Col
          className="d-none d-sm-block mt-4 ps-3"
          xs="12"
          sm="3"
          md="3"
          lg="3"
          xl="3"
        >
          <Card
            flexDir="column"
            item={ITEM}
            width={204}
            height={204}
            Icon={<FireIcon color="#D72339" />}
          />
        </Col>
        <Col
          className="d-none d-sm-block mt-4 p-0"
          xs="12"
          sm="9"
          md="9"
          lg="9"
          xl="9"
        >
          <AmazingGridSection />
        </Col>
        <Col
          className="d-block d-sm-none p-0"
          xs="12"
          sm="9"
          md="9"
          lg="9"
          xl="9"
        >
          <AmazingSlider />
        </Col>
      </Row>
    </Row>
  );
};

export default AmazingSection;
