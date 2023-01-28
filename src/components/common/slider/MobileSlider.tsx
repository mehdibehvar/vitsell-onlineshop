import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Iimagedata } from "../../../../types";
import SlideInfo from "../../slider/SlideInfo";
import Link from "next/link";



interface IProps {
  IMAGESDATA: Iimagedata[];
  hasDetails: boolean;
  InfoClass:string,
  spaceBetween:number,
  priority:boolean
}
const MobileSlider = ({ IMAGESDATA,InfoClass, hasDetails,priority }: IProps) => {

  return (
    <div  className="mobile_swiper  w-100">
      <Swiper
        className="swiper"
        navigation={true}
        slidesPerView={2}
        spaceBetween={4}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {IMAGESDATA.map((item, index) => (
          <SwiperSlide key={item.alt}>
          <Link href={`/product/${item.alt}`}>  <div className="swiper_image_wrapper">
              <Image
                src={`${item.url}`}
                alt={`${item.alt}`}
                fill
                priority={priority}
              />
            </div></Link>
            {hasDetails && (
           <SlideInfo InfoClass={InfoClass} item={item}/>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileSlider;
