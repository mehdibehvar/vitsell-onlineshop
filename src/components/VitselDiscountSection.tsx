import React from "react";
import { Col, Row } from "reactstrap";
import SectionsHeader from "./common/SectionsHeader";
import { DISCOUNTIMAGESDATA } from "./constant/imageData";
import { DiscountIcon } from "./icons/icons";
const SwiperSlider=dynamic(()=>import("./slider/swiperSlider"),{ssr:false})
import {useState,useEffect} from "react"
import dynamic from "next/dynamic";
const VitselDiscountSection = () => {
  const [perView,setPerView]=useState<number>(6)
  useEffect(() => {
    if(window.innerWidth<768){
      setPerView(2);
    }
  },[])
  return (
    <Row className="vitsell_discount_section">
      <Col xs="12">
      <SectionsHeader link="/" title="تخفیف های ویتسل" icon={<DiscountIcon/>}/>
        <SwiperSlider
          IMAGESDATA={DISCOUNTIMAGESDATA}
          hasDetails={true}
          width={112}
          height={112}
          className="discount_swiper"
          InfoClass="discount_info"
          spaceBetween={4}
          priority={false}
        />
      </Col>
    </Row>
  );
};

export default VitselDiscountSection;
