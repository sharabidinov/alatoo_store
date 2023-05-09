import classes from "./productsPage.module.css";
import Swiper from "../../components/Swiper/Swiper";
import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { productsContext } from "../../contexts/productsContext";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const { products, getProducts } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const handlePage = (e, p) => {
    setPage(p);
  };

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  const itemsOnPage = 8;

  const count = Math.ceil(products.length / itemsOnPage);

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <div className={classes.theMainestDiv}>
      <Swiper />
      <div className={classes.filAndSr}>
        <a href="#">
          <div className={classes.icon}>
            <i className="fa-solid fa-filter fa-2xl"></i>
          </div>
        </a>
        <a href="#">
          <div className={classes.icon} id={classes.search}>
            <i
              className="fa-solid fa-magnifying-glass fa-2xl"
              id={classes.search}></i>
          </div>
        </a>
        <input
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search..."
          className={classes.sr_inp}
        />
      </div>
      <div className={classes.mainDiv}>
        <div className={classes.mainDiv2}>
          <div className={classes.secondDiv}>
            {currentData().map(item => (
              <Card className={classes.cards} item={item} key={item.id} />
            ))}
          </div>
          <Pagination count={count} page={page} onChange={handlePage} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
