
import { ReactElement } from "react";
import AddToCard from "../../components/common/AddToCard";

import Wizard from "../../components/common/Wizard";
import ProductsLayout from "../../components/layouts/ProductsLayout";
import MostProductInfo from "../../components/singleProduct/MostProductInfo";
import SingleProductInfo from "../../components/singleProduct/SingleProductInfo";
import { NextPageWithLayout } from "../_app";

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
