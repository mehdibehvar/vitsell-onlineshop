import Image from "next/image";
import { Iimagedata } from "../../../types";
import CardInfo from "./CardInfo";
import { ReactElement } from 'react'
import { FireIcon } from "../icons/icons";
import Link from "next/link";
interface IProps {
  item: Iimagedata;
  width: number;
  height: number;
  Icon?:ReactElement;
  flexDir:string
}
const Card = ({ item, width, height, Icon,flexDir }: IProps) => {
  return (
  <Link href={`/product/${item.title}`}>
      <div className={flexDir==="column"?"card_column":"card_row"}>
      <Image
        src={`${item.url}`}
        alt={`${item.alt}`}
        width={width}
        height={height}
      /> 
      <CardInfo item={item} InfoClass="card_info" />
      <div className="flag">
       <FireIcon color="#D72339"/>
    </div>
    </div>
  </Link>
  );
};

export default Card;
