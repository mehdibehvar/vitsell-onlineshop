import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Iimagedata } from "../../../types";
import SlideInfo from "./SlideInfo";
import { useWindowDimensions } from "../../utils/useWindowDimensions";
import { useEffect, useState } from "react";
import Link from "next/link";
interface IProps {
  IMAGESDATA: Iimagedata[];
  width: number;
  height: number;
  hasDetails: boolean;
  className:string,
  InfoClass:string,
  spaceBetween:number,
  customPerView?:number,
  priority:boolean
}
const SwiperSlider = ({className, IMAGESDATA, hasDetails, width, height,InfoClass,spaceBetween,customPerView,priority }: IProps) => {
const {windowWidth}=useWindowDimensions();
const [perView, setPerView] = useState(1)
useEffect(()=>{
  if (customPerView) {
    return;
  }
  if(windowWidth<576){
    setPerView(2)
  }else{
    setPerView(6)
  }

},[windowWidth,customPerView])
  return (
    <div className={`${className}`}>
      <Swiper
        className="swiper"
        navigation={true}
        slidesPerView={customPerView?customPerView:perView}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {IMAGESDATA.map((item, index) => (
          <SwiperSlide key={item.alt}>
          <Link href="/product/2">
          <div className="image_wrapper">
              <Image
                src={`${item.url}`}
                alt={`${item.alt}`}
                width={width}
                height={height}
                priority={priority}
              />
            </div>
          </Link>
            {hasDetails && (
           <SlideInfo InfoClass={InfoClass} item={item}/>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
