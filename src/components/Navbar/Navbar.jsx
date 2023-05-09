import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../images/logo.jpg";

import classes from "./navbar.module.css";

import Modal from "@mui/material/Modal";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { productsContext } from "../../contexts/productsContext";

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

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { getProducts } = useContext(productsContext);
  const navigate = useNavigate();
  const [state, setState] = useState({
    left: false,
  });

  function regis() {
    navigate("/register");
    handleClose();
  }

  useEffect(() => {
    getProducts();
  }, []);

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List className={classes.logoDrawer}>
        <p className={classes.logoText} onClick={() => navigate("/")}>
          ALA-TOO STORE
        </p>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText onClick={() => navigate("/cart")}>Cart</ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonOutlinedIcon />
            </ListItemIcon>
            <ListItemText onClick={() => navigate("/user")}>
              Account
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className={classes.mainDiv}>
            <h1>SIGN IN</h1>
            <div className={classes.inputs}>
              <input type="text" placeholder="Username" />

              <input type="password" placeholder="Password" />
              <div className={classes.btn}>
                <span style={{ color: "black" }}>LOGIN</span>
              </div>
            </div>
            <div className={classes.links}>
              <p>Forgot password</p>
              <p className={classes.secondLink} onClick={regis}>
                Sign Up
              </p>
            </div>
          </div>
        </Box>
      </Modal>

      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            {["left"].map(anchor => (
              <React.Fragment key={anchor}>
                <MenuIcon onClick={toggleDrawer(anchor, true)} />
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className={classes.logo_div} onClick={() => navigate("/")}>
              <img className={classes.logo} src={Logo} alt="logo" width="50" />
              <p className={classes.logoText}>ALA-TOO STORE</p>
            </div>
          </Typography>

          <Button color="inherit" onClick={handleOpen}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
