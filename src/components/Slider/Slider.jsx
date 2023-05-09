import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import classes from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../images/img.png";
import img2 from "../../images/img_1.png";
import img3 from "../../images/img_2.png";
import img4 from "../../images/img_3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      className={classes.swiperMain}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
      <SwiperSlide>
        <img src={img1} alt="" className={classes.sliderImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" className={classes.sliderImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" className={classes.sliderImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" className={classes.sliderImg} />
      </SwiperSlide>
    </Swiper>
  );
};
