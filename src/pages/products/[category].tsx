import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { Col, Container, Row } from "reactstrap";
import SectionsHeader from "../../components/common/SectionsHeader";
import SortingNavbar from "../../components/common/SortingNavbar";
import { DISCOUNTIMAGESDATA } from "../../components/constant/imageData";
import { MagicStarIcon } from "../../components/icons/icons";
import ProductsLayout from "../../components/layouts/ProductsLayout";
import ProducsBanner from "../../components/producsBanner";
import ProductsGrid from "../../components/ProductsGrid";
import ProductsSidebar from "../../components/ProductsSidebar";
import { NextPageWithLayout } from "../_app";
const SwiperSlider = dynamic(
  () => import("../../components/slider/swiperSlider"),
  { ssr: false }
);
const Products: NextPageWithLayout = () => {
  return (
    <>
      <Row className="products_wizard my-3 d-none d-sm-block">
       <Col>
       <h6>
          <span>ویتسل</span>
          <span>/</span>
          <span>کالای دیجیتال</span>
          <span>/</span>
          <span>لوازم جانبی</span>
        </h6>
       </Col>
      </Row>
      <Row>
        <Col > 
        <section className="products_content d-flex  align-items-start">
          <ProductsSidebar/>
          <section className="products_left_section">
       <Container className="p-0">
            <Row className="products_slider">
            <Col>
            <SectionsHeader
                title="پرفروشترین محصولات"
                icon={<MagicStarIcon />}
                link=""
              />
       
             {/* <SwiperSlider
                IMAGESDATA={DISCOUNTIMAGESDATA}
                hasDetails={true}
                width={112}
                height={112}
                className="products_page_slider"
                InfoClass="discount_info"
                spaceBetween={4}
                priority={false}
              /> */}
     
            </Col>
            </Row>
            <Row className="sorting_navbar_section mt-2 d-none d-sm-block">
             <Col>
             <SortingNavbar />
             </Col>
            </Row>
            <Row className="products g-2 mt-2">
              <ProductsGrid />
            </Row>
            <ProducsBanner />
            <Row className="products g-2 mt-2">
              <ProductsGrid />
            </Row>
            <ProducsBanner />
       </Container>
          </section>
        </section>
        </Col>
      </Row>
    </>
  );
};
Products.getLayout = function getLayout(page: ReactElement) {
  return <ProductsLayout>{page}</ProductsLayout>;
};
export default Products;
