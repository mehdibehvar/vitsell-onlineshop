import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Thumbs } from "swiper";
import Image from "next/image";
import { Iimagedata } from "../../../types";
import { AddIcon, CloseSquareIcon } from "../icons/icons";
import Price from "../common/Price";
import Button from "../common/button/Button";
import { useState } from "react";
interface IProps {
  setShowModal: (input: boolean) => void;
  showmodal: boolean;
  ProductImageDATA: Iimagedata[];
}
function ProductPicsModal({
  showmodal,
  setShowModal,
  ProductImageDATA,
}: IProps) {
  const [selectedImage, setselectedImage] = useState<string>(ProductImageDATA[0].url);

 
  
  return (
    <>
      <div
        className={`modal_wrapper  ${showmodal ? "show_modal" : "hideModal"}`}
      >
        <section className="product_pics_modal d-flex flex-column">
          <span
            className="position-absolute close_icon"
            onClick={() => setShowModal(false)}
          >
            <CloseSquareIcon />
          </span>
          <div className="body d-flex gap-3">
            <div className="right  d-flex justify-content-center align-items-center">
              <Image
                src={`${selectedImage}`}
                alt="productpic"
                width={334}
                height={338}
              />
            </div>
            <div className="left  d-flex flex-column">
              <div>
                <h4 className="title fs-16 text-black-3 fw-bolder">
                  {ProductImageDATA[0].title}
                </h4>
              </div>
              <div className="description">
                <h6 className="fs-16 fw-bolder text-h-color">توضیحات کالا</h6>
                <p className="fs-14 fw-400 text-black-3">
                  ستفاده از هدفون‌های کوچک بی‌سیم در جای‌جای دنیا بسیار ترند و
                  محبوب شده است. با استفاده از این هدفون‌ها شما دیگر نیاز نیست
                  برای موسیقی گوش....{" "}
                </p>
              </div>
              <div className="modal_slider-wrapper cursor-pointer ">
                <Swiper
                  navigation={true}
                  slidesPerView={6}
                  spaceBetween={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Thumbs]}
                  watchSlidesProgress
                  
                >
                  {ProductImageDATA.map((item, index) => (
                    <SwiperSlide key={item.alt}>
                      <div
                      onClick={()=>setselectedImage(item.url)}
                       className="image_thumb_wrapper position-relative">
                        <Image src={`${item.url}`} alt={`${item.alt}`} fill />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="add_to_card w-100 d-flex gap-3">
                <div className="addto_basket w-100">
                  <Button className="addto_basket_button" type="button">
                    <span>
                      <AddIcon />
                    </span>
                    <span>افزودن به سبد خرید</span>
                  </Button>
                </div>
                <div className="discount_price">
                  <Price
                    price={"۴,۳۴۳,۰۰۰"}
                    percent={"۳۴٪ "}
                    discount={"۴,۳۴۳,۰۰۰"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductPicsModal;
