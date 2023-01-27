import Card from "../common/Card";
import { Pagination, Navigation } from "swiper";
import { AMAZINGDATA } from "../constant/data";
import { FireIcon } from "../icons/icons";
import { Swiper, SwiperSlide } from "swiper/react";
const AmazingSlider = () => {
  return (
    <div className="amazing_mobile_card_slider">
      <Swiper
        className="card_swiper"
        navigation={true}
        slidesPerView={2}
        spaceBetween={180}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {AMAZINGDATA.map((item, index) => (
          <SwiperSlide key={item.alt}>
            <div className="card_wrapper">
              <Card
                flexDir="row"
                key={index}
                item={item}
                width={88}
                height={88}
                Icon={<FireIcon color="#D72339" />}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AmazingSlider;
