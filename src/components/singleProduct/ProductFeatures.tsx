import React from "react";
import { FaChevronLeft } from "react-icons/fa";
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
        <span>۸۲٪ از خریداران خرید این کالا را پیشنهاد کردند!</span>
        <span>
          <LikeShapIcon />
        </span>
      </div>
      <div className="coloring d-flex justify-content-between w-100">
        <span>رنگ بندی:</span>
        <div className="d-flex justify-content-between">
          <ColorCheckBox className="color_checkbox" color="#C2123C" />
          <ColorCheckBox className="color_checkbox" color="#28B564" />
          <ColorCheckBox className="color_checkbox" color="#2F80ED" />
          <ColorCheckBox className="color_checkbox" color="#F2994A" />
        </div>
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
