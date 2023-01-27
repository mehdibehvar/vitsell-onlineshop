
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Commentbox from "./Commentbox";
const commentsData=[
    {
      date:"۱۲ دی۱۴۰۱",
      text:"         یک گوشی بسیار خوب میان رده روبه بالا با پردازنده قدرتمند اختصاصی خود سامسونگ _دوربین های قوی و باکیفیت_صفحه با وضوح و کیفیت بالای سوپر آمولود_ضد آب بودن _حافظه وم بالا_و در آخر کیفیت بالا و برند معتبر سامسونگ که واقعا بااین امکانات وقیمت در بین دیگر رقبای سامسونگ یک سر و گردن بالاتر هست و ارزش خرید بالایی دارد",
      recommend:"yes",
  
    },
    {
      date:"۱۲ دی۱۴۰۱",
      text:"         یک گوشی بسیار خوب میان رده روبه بالا با پردازنده قدرتمند اختصاصی خود سامسونگ _دوربین های قوی و باکیفیت_صفحه با وضوح و کیفیت بالای سوپر آمولود_ضد آب بودن _حافظه وم بالا_و در آخر کیفیت بالا و برند معتبر سامسونگ که واقعا بااین امکانات وقیمت در بین دیگر رقبای سامسونگ یک سر و گردن بالاتر هست و ارزش خرید بالایی دارد",
      recommend:"no",
  
    },
    {
      date:"۱۲ دی۱۴۰۱",
      text:"         یک گوشی بسیار خوب میان رده روبه بالا با پردازنده قدرتمند اختصاصی خود سامسونگ _دوربین های قوی و باکیفیت_صفحه با وضوح و کیفیت بالای سوپر آمولود_ضد آب بودن _حافظه وم بالا_و در آخر کیفیت بالا و برند معتبر سامسونگ که واقعا بااین امکانات وقیمت در بین دیگر رقبای سامسونگ یک سر و گردن بالاتر هست و ارزش خرید بالایی دارد",
      recommend:"notsure",
  
    },
  ]
const CommentsCarousel = () => {
  return (
    <div className="comment_mobile_carousel">
      <Swiper
        className="comment_swiper"
        navigation={true}
        slidesPerView={1}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {commentsData.map((item, index) => (
          <SwiperSlide key={index}>
           <div className="card_wrapper">
           <Commentbox comment={item}/>
           </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommentsCarousel;
