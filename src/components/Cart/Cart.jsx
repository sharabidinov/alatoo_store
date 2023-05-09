import React, { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../../contexts/cartContext";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import classes from "./cart.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteProductInCart } = useCart();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [number, setNumber] = useState("");
  const [counter, setCounter] = useState("");
  const [pin, setPin] = useState("");

  useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  function payment() {
    setCounter("");
    setPin("");
    setNumber("");
    cartCleaner();
    handleClose();

    handleClose();
  }

  return (
    <div className={classes.mainDiv}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Count</TableCell>
              <TableCell align="center">Sub Price</TableCell>
              <TableCell align="center">---</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map(row => (
              <TableRow
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  <img src={row.item.img} alt="" width="50" />
                </TableCell>
                <TableCell align="center">{row.item.productName}</TableCell>
                <TableCell align="center">{row.item.price} KGS</TableCell>
                <TableCell align="center">
                  <TextField
                    type="number"
                    value={row.count}
                    onChange={e =>
                      changeProductCount(e.target.value, row.item.id)
                    }
                  />
                </TableCell>
                <TableCell align="center">{row.subPrice}</TableCell>
                <TableCell align="center">
                  <button onClick={() => deleteProductInCart(row.item.id)}>
                    Delete From Cart
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="h6" component="div" className={classes.priceDiv}>
          Total Price: {cart?.totalPrice} KGS
          <div>
            <div className={classes.btn}>
              <span style={{ color: "black" }} onClick={handleOpen}>
                BUY
              </span>
            </div>
            <Modal
              className={classes.modalBody}
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description">
              <Box sx={style} className={classes.modalBox}>
                <Typography
                  style={{ margin: "20px 0px 8px 0px" }}
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2 }}>
                  CARD NUMBER
                </Typography>
                <TextField
                  id="outlined-search"
                  label="Number"
                  type="number"
                  className={classes.inputs}
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                />
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  CVV
                </Typography>
                <TextField
                  id="outlined-search"
                  label="CVV"
                  type="number"
                  value={pin}
                  className={classes.inputs}
                  onChange={e => setPin(e.target.value)}
                />
                <Typography
                  id="keep-mounted-modal-description"
                  style={{ margin: "25px 0px 8px 0px" }}
                  sx={{ mt: 2 }}>
                  ADDRESS
                </Typography>
                <TextField
                  id="outlined-search"
                  label="Address"
                  type="search"
                  className={classes.inputs}
                  value={counter}
                  onChange={e => setCounter(e.target.value)}
                />
                <button className={classes.buyBtn} onClick={payment}>
                  BUY
                </button>
              </Box>
            </Modal>
          </div>
        </Typography>
      </TableContainer>
    </div>
  );
}
