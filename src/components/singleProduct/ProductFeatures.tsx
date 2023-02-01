import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import AddToCard from "../common/AddToCard";
import ColorCheckBox from "../common/button/ColorCheckBox";
import { LikeShapIcon } from "../icons/icons";
import KeySpicifications from "./KeySpecifications";

const ProductFeatures = () => {
  return (
    <section className="product_features">
      <header>
        <span className="product_name">
          گوشی موبایل تی پی-لینک مدل Neffos X1 Lite TP904A دو سیم کارت
        </span>
      </header>
      <div className="likes">
        <span>
          <LikeShapIcon />
        </span>
        <span className="pe-2">۸۲٪ از خریداران خرید این کالا را پیشنهاد کردند!</span>
      </div>
      <div className="coloring  d-flex justify-content-between w-100">
        <span>رنگ بندی:</span>
        <div className="d-flex justify-content-end">
          <ColorCheckBox className="red" />
          <ColorCheckBox className="green"/>
          <ColorCheckBox className="blue"  />
          <ColorCheckBox className="yellow" />
        </div>
      </div>
      <div className="float_addtocard d-block d-sm-none position-sticky top-0  w-100">
     <AddToCard/>
      </div>
     <KeySpicifications hastitle={true}/>
      <div className="description">
        <h5>توضیحات کالا</h5>
        <div>
          <p className="summary">
            ستفاده از هدفون‌های کوچک بی‌سیم در جای‌جای دنیا بسیار ترند و محبوب
            شده است. با استفاده از این هدفون‌ها شما دیگر نیاز نیست برای موسیقی
            گوش....
          </p>
        </div>
        <div className="show_more w-100 d-flex justify-content-end  align-items-center">
          <span>مشاهده بیشتر</span>
          <span className=" mt-1">
            <FaChevronLeft />
          </span>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default ProductFeatures;
