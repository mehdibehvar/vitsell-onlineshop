import React from "react";
import { Col, Row } from "reactstrap";
import {
  BIGSLIDERIMAGESDATA, 
  SMALLSLIDERIMAGESDATA,
} from "../constant/imageData";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const SwiperSlider = dynamic(() => import("./swiperSlider"), { ssr: false });
const SliderSection = () => {
  const [width, setWidth] = useState<number>(902);
  const [height, setHeight] = useState<number>(373);
  useEffect(() => {
    if (window.innerWidth < 576) {
      setWidth(382);
      setHeight(157);
    }
    if (window.innerWidth >1200) {
      setWidth(1200);
      setHeight(373);
    }
  }, []);
  return (
    <Row className="slider g-3">
      <Col xs="12" sm="9" md="9" lg="9" xl="9">
        <SwiperSlider
          InfoClass="slide_details"
          className="big_swiper"
          IMAGESDATA={BIGSLIDERIMAGESDATA}
          hasDetails={false}
          width={width}
          height={height}
          spaceBetween={1}
          customPerView={1}
          priority={true}
        />
      </Col>
      <Col sm="3" md="3" lg="3" xl="3" className="d-none d-sm-block">
        <SwiperSlider
          spaceBetween={1}
          className="small_swiper"
          InfoClass="slide_details"
          IMAGESDATA={SMALLSLIDERIMAGESDATA}
          hasDetails={true}
          width={204}
          height={204}
          customPerView={1}
          priority={false}
        />
      </Col>
    </Row>
  );
};

export default SliderSection;
