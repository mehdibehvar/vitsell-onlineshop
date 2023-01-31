import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "reactstrap";
import SectionsHeader from "../common/SectionsHeader";
import DesktopSlider from "../common/slider/DesktopSlider";
import MobileSlider from "../common/slider/MobileSlider";
import { DISCOUNTIMAGESDATA } from "../constant/imageData";
import { SimilarIcon } from "../icons/icons";
import DisplayComments from "./DisplayComments";
import PricingSidebar from "./PricingSidebar";
import ProductIntroDescription from "./ProductIntroDescription";
import ProductIntroNavSection from "./ProductIntroNavSection";
import ProductSpicifications from "./ProductSpicifications";
import RegisterComment from "./RegisterComment";
import SellersList from "./SellersList";
const SwiperSlider = dynamic(() => import("../slider/swiperSlider"));

const MostProductInfo = () => {
  return (
    <Row>
      <Col className="p-1">
        <section className="most_product_info d-flex">
          <article className="most_info">
            <section className="sellers_section d-none d-sm-block w-100">
              <h3 className="mb-3">فروشندگان این کالا</h3>
              <SellersList />
            </section>
            <section className="product_nav_section ">
              <ProductIntroNavSection />
            </section>
            <section>
              <ProductIntroDescription />
            </section>
            <section className="product_specifics_section w-100">
              <ProductSpicifications />
            </section>
            <section className="comments_section w-100">
              <RegisterComment />
              <DisplayComments />
            </section>

            <section className="similar_products_section  d-flex flex-column ">
              <SectionsHeader title="محصولات مشابه" icon={<SimilarIcon />} />
              <div className="product_desktop_slider_wrapper d-none d-sm-block mt-3 ">
                <DesktopSlider
                  IMAGESDATA={DISCOUNTIMAGESDATA}
                  hasDetails={true}
                  InfoClass="discount_info"
                  spaceBetween={4}
                  priority={false}
                />
              </div>
              <div className="product_mobile_slider_wrapper d-block d-sm-none mt-2">
                <MobileSlider
                  IMAGESDATA={DISCOUNTIMAGESDATA}
                  hasDetails={true}
                  InfoClass="discount_info"
                  spaceBetween={4}
                  priority={false}
                />
              </div>
            </section>
          </article>
          <div className="position-sticky top-0 h-100">
            <PricingSidebar />
          </div>
        </section>
      </Col>
    </Row>
  );
};

export default MostProductInfo;
