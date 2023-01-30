import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useState } from "react";
interface IQdata  { title: string, link:string }

const FaqSlider = ({qData}:{qData:IQdata[]}) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const handleActive=(index:number)=>{
    setActiveItem(index)
  }
  return (
    <div className='faq_slider_wrapper d-block d-sm-none  w-100'>
  <Swiper
        className="swiper"
        navigation={false}
        slidesPerView={2}
        spaceBetween={-60}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {qData.map((item, index) => (
          <SwiperSlide key={index}>
               <div onClick={()=>handleActive(index)}  className={`${index===activeItem?"show_border":""} faq_slide text-gray-2 `}>
            
              <Link className="text-gray fs-14 w-100" href={item.link}>
                    {item.title}
                    <div className="slide_border"></div>
                  </Link>
          
               
                </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FaqSlider