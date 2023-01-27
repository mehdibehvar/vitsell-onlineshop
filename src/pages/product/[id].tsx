import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { Col, Row } from "reactstrap";
import SectionsHeader from "../../components/common/SectionsHeader";
import SortingNavbar from "../../components/common/SortingNavbar";
import Wizard from "../../components/common/Wizard";
import { DISCOUNTIMAGESDATA } from "../../components/constant/imageData";
import { MagicStarIcon } from "../../components/icons/icons";
import ProductsLayout from "../../components/layouts/ProductsLayout";
import ProducsBanner from "../../components/producsBanner";
import ProductsGrid from "../../components/ProductsGrid";
import ProductsSidebar from "../../components/ProductsSidebar";
import MostProductInfo from "../../components/singleProduct/MostProductInfo";
import SingleProductInfo from "../../components/singleProduct/SingleProductInfo";
import { NextPageWithLayout } from "../_app";
const SwiperSlider = dynamic(
  () => import("../../components/slider/swiperSlider"),
  { ssr: false }
);
const Product: NextPageWithLayout = () => {
  return (
    <>
      <Wizard/>
      <SingleProductInfo/>
      <MostProductInfo/>
    </>
  );
};
Product.getLayout = function getLayout(page: ReactElement) {
  return <ProductsLayout>{page}</ProductsLayout>;
};
export default Product;
