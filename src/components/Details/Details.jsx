import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./details.module.css";
import { productsContext } from "../../contexts/productsContext";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useCart } from "../../contexts/cartContext";

const Details = () => {
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const { addProductToCart, checkProductInCart } = useCart();
  const params = useParams();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  return (
    <div className={classes.mainDiv}>
      <Swiper
        className={`${classes.swiperMain} ${classes.mainDiv}`}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <img src={oneProduct?.img} height="467" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oneProduct?.image1} height="467" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oneProduct?.image2} height="467" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oneProduct?.image3} height="467" alt="" />
        </SwiperSlide>
        ...
      </Swiper>

      <div className={classes.textDiv}>
        <h1>{oneProduct?.productName}</h1>
        <p className={classes.description}>
          <strong>Description:</strong> {oneProduct?.description}
        </p>

        <p className={classes.material}>
          <strong>Availability:</strong> In stock
        </p>

        <p className={classes.material}>
          <strong>Size:</strong> 40-42-44
        </p>
        <h2>{oneProduct?.price} KGS</h2>

        <div className={classes.buttonAndCart}>
          <button
            className={classes.buyBtn}
            onClick={() => addProductToCart(oneProduct)}>
            {checkProductInCart(oneProduct?.id)
              ? "REMOVE FROM CART"
              : "ADD TO CART"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
