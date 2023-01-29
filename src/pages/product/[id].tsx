
import { ReactElement } from "react";


import Wizard from "../../components/common/Wizard";
import FluidLayout from "../../components/layouts/FluidLayout";
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
  return <FluidLayout>{page}</FluidLayout>;
};
export default Product;
