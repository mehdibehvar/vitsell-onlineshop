import React from "react";
import { Col, Row } from "reactstrap";
import SectionsHeader from "./common/SectionsHeader";
import { DISCOUNTIMAGESDATA } from "./constant/imageData";
import dynamic from "next/dynamic";
import { DiscountIcon } from "./icons/icons";
const SwiperSlider=dynamic(()=>import("./slider/swiperSlider"),{ssr:false})
import {useState,useEffect} from "react"
const BestSelling = () => {
    const [perView,setPerView]=useState<number>(6)
    useEffect(() => {
      if(window.outerWidth<768){
        setPerView(2);
      }
    },[])
  return (
    <Row className="vitsell_discount_section">
      <Col xs="12">
      <SectionsHeader link="/" title="پرفروش ترین محصولات" icon={<DiscountIcon/>}/>
        <SwiperSlider
          IMAGESDATA={DISCOUNTIMAGESDATA}
          width={112}
          height={112}
          hasDetails={true}
          className="discount_swiper"
          InfoClass="discount_info"
          spaceBetween={4}
          priority={false}
        />
      </Col>
    </Row>
  );
};

export default BestSelling;
