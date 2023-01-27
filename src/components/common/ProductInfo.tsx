import React from "react";
import { IProductdata } from "../../../types";

import { StarIcon } from "../icons/icons";
import Price from "./Price";
interface IProps{
item:IProductdata
}
const ProductInfo = ({item}:IProps) => {
  const {price,percent,discount}=item;
  return (
    <div className="product_info">
      <div className="title">
        <span>{item.title}</span>
      </div>
  {item.likes?<div className="likes">
        <span className="like_value">{item.likes}</span>
        <span className="stars_icon">
          <StarIcon/>
        </span>
      </div>:null}
     <Price price={price} percent={percent} discount={discount}/>
    </div>
  );
};

export default ProductInfo;
