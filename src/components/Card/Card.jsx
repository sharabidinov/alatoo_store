import React from "react";
import classes from "./card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${item.id}`)}
      className={classes.mainDiv}>
      <img src={item.img} alt="clothes" height="330" width="280" />
      <p>{item.productName}</p>
      <p>{item.price} KGS</p>
    </div>
  );
};

export default Card;
