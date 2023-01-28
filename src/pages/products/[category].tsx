import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { Col, Container, Row } from "reactstrap";
import SectionsHeader from "../../components/common/SectionsHeader";
import DesktopSlider from "../../components/common/slider/DesktopSlider";
import MobileSlider from "../../components/common/slider/MobileSlider";
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
        <Col>
          <section className="products_content d-flex  align-items-start">
            <ProductsSidebar />
            <section className="products_left_section">
              <Container className="p-0">
                <Row className="products_slider best_sell">
                  <Col>
                    <SectionsHeader
                      title="پرفروشترین محصولات"
                      icon={<MagicStarIcon />}
                      showMobIcon={true}
                    />
                    <div className="desktop_slider_wrapper d-none d-sm-block mt-3">
                      <DesktopSlider
                        IMAGESDATA={DISCOUNTIMAGESDATA}
                        hasDetails={true}
                        InfoClass="discount_info"
                        spaceBetween={4}
                        priority={false}
                      />
                    </div>
                    <div className="mobile_slider_wrapper d-block d-sm-none mt-2">
                      <MobileSlider
                        IMAGESDATA={DISCOUNTIMAGESDATA}
                        hasDetails={true}
                        InfoClass="discount_info"
                        spaceBetween={4}
                        priority={false}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="sorting_navbar_section mt-2 d-none d-sm-block">
                    <Col>
                      <SortingNavbar />
                    </Col>
                  </Row>
                <Container>
                 
                  <Row className="products g-2 mt-2">
                    <ProductsGrid />
                  </Row>
                  <ProducsBanner />
                  <Row className="products g-2 mt-2">
                    <ProductsGrid />
                  </Row>
                  <ProducsBanner />
                </Container>
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
