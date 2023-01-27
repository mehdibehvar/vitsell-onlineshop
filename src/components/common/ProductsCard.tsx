import Image from "next/image"
import {  IProductdata } from "../../../types";
import { ReactElement } from 'react'
import ProductInfo from "./ProductInfo";
import { FireIcon } from "../icons/icons";
import Link from "next/link";
interface IProps {
    item: IProductdata;
  }
const ProductsCard = ({ item}: IProps) => {
  return (
 <>
<Link href={`/product/${item.title}`}>
<div   className="product_card_vertical d-none d-sm-block">
    <div className="photo_wrapper">
    <Image
      src={`${item.url}`}
      alt={`${item.alt}`}
      width={161}
      height={162}
    /> 
    <div className="flag">
       <FireIcon color="#D72339"/>
    </div>
    <div className="colors">
        <span></span>
        <span></span>
        <span></span>
    </div>
    </div>
    <ProductInfo item={item}/>
    </div>
    <div   className="product_card_horizontal d-flex d-sm-none">
    <div className="photo_wrapper">
    <Image
      src={`${item.url}`}
      alt={`${item.alt}`}
      width={102}
      height={104}
    /> 
    <div className="flag">
       <FireIcon color="#D72339"/>
    </div>
    <div className="colors">
        <span></span>
        <span></span>
        <span></span>
    </div>
    </div>
    <ProductInfo item={item}/>
    </div>
</Link>
 </>
  )
}

export default ProductsCard