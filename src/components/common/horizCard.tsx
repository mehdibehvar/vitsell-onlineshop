import Image from "next/image"
import ProductInfo from "./ProductInfo";
import { FireIcon } from "../icons/icons";
import Link from "next/link";

const HorizCard = ({item}:{item:any}) => {
  return (
  <Link href={`/product/${item.alt}`}>
      <div   className="new_card_horizontal">
    <div className="photo_wrapper">
    <Image
      src={`${item.url}`}
      alt={`${item.alt}`}
      width={88}
      height={88}
    /> 
    </div>
    <ProductInfo item={item}/>
    <div className="flag">
       <FireIcon color="#D72339"/>
    </div>
    </div>
  </Link>
  )
}

export default HorizCard