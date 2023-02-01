import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import {  Thumbs } from 'swiper';
import { ProductImageDATA } from "../constant/data";
import Image from "next/image";

import { FaHeart } from "react-icons/fa";
import { CommentIcon, ShareIcon, StarIcon } from "../icons/icons";
import { useState } from "react";
import ProductPicsModal from "./ProductPicsModal";

const ProductGallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); 
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShowModal=()=>{
      setShowModal(true);
    };

  return (
    <section className='product_gallery d-flex flex-column justify-content-center align-items-center'>
   <div className="top_section">
   <div className="gallery_wrapper">
      <Swiper
      navigation={true}
      slidesPerView={1}
      spaceBetween={2}
      pagination={{
        clickable: true,
      }}
      modules={[Thumbs,Pagination,Navigation]}
      thumbs={{ swiper: thumbsSwiper }}
    >
      {ProductImageDATA.map((item, index) => (
          <SwiperSlide key={item.alt}>
            <div className="product_image_wrapper">
              <Image
                src={`${item.url}`}
                alt={`${item.alt}`}
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="right_like_icons d-flex flex-column align-items-center g-2">
        <span><ShareIcon/></span>
        <span><FaHeart/></span>
        
      </div>
      <div className="left_comment_icons d-flex flex-column align-items-end ">
      <span className="mb-2"><span className="ms-1">۱۳۴ نظر</span><CommentIcon/></span>
      <span><span className="ms-1">4.2</span><StarIcon/></span>
      </div>
   </div>
  
      <div className="thumb_wrapper d-none d-sm-block ">
       
      <Swiper
      navigation={true}
      slidesPerView={5}
      spaceBetween={1}
      pagination={{
        clickable: true,
      }}
      modules={[Thumbs]}
      watchSlidesProgress
      onClick={(swiper)=>setThumbsSwiper(swiper)}
      
    >
      {ProductImageDATA.map((item, index) => (
          <SwiperSlide key={item.alt}>
            <div className="image_thumb_wrapper">
              <Image
                src={`${item.url}`}
                alt={`${item.alt}`}
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div onClick={handleShowModal} className="active_thumb">
        <div className="dots d-flex w-100 h-100 align-items-center justify-content-center">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      </div>
      <ProductPicsModal ProductImageDATA={ProductImageDATA} setShowModal={setShowModal} showmodal={showModal}/>
    </section>
  )
}

export default ProductGallery