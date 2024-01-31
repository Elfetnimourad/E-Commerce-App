import React, { useContext, useState } from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import themeContext from "./Contextc";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { arr, num, setNum, setArr, setCount, count } =
    useContext(themeContext);

  const increment = (index) => {
    const updatedArr = arr.map((item, i) => {
      if (i === index) {
        setCount(count + 1);
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }

      return item;
    });
    setNum(num + 1);
    setArr(updatedArr);
  };

  const decrement = (index) => {
    const updatedArr = arr.map((item, i) => {
      if (i === index && item.quantity > 0) {
        setCount(count - 1);
        return { ...item, quantity: (item.quantity || 1) - 1 };
      }
      return item;
    });
    setNum(num - 1);
    setArr(updatedArr);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const deleteFunction = (item) => {
    setArr(arr.filter((e) => e !== item));
    setCount(count - item.quantity);
  };

  return (
    <nav className="navbar header fixed-top ">
      <Link to="/">
        <img
          className="logo"
          src="https://cdn.icon-icons.com/icons2/1526/PNG/512/shop_106574.png"
          alt=""
        />
      </Link>
      <div className="avatarElem d-flex justify-content-end algin-items-end ms-1">
        <Avatar className="avatarEleme" alt="Remy Sharp" src="" />
      </div>
      <div className="sign-up ms-auto">
        <Link to="/SignUp">
          <Button variant="outlined signBtn">Sign Up</Button>
        </Link>
      </div>
      <div className="iconHandle">
        <Badge
          className="badge"
          badgeContent={count || 0}
          color="error"
          onClick={toggleDrawer}
        >
          <ShoppingCartIcon className="ShoppingCartIcon" />
        </Badge>
      </div>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box p={2} width="350px" textAlign={"center"} role="presentation">
          <Link to={"/"}>
            <ArrowForwardIcon
              className="ArrowForwardIcon"
              onClick={toggleDrawer}
            />
          </Link>
          <Typography variant="h6" component={"div"}>
            Side Panel
          </Typography>
          <button type="button" class="btn btn-success someBtn">
            <span className="spanCost">Cost:</span>
            <span className="span">
              {arr
                ?.map((e) => e.price * (e?.quantity || 1))
                .reduce((acc, ele) => acc + ele, 0)}
              $
            </span>
          </button>

          {arr?.map((item, index) => (
            <div key={index}>
              <IconButton
                onClick={() => deleteFunction(item)}
                className="deleteButton"
              >
                <CloseIcon />
              </IconButton>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={12}>
                  <Card>
                    <img
                      className="card-img-topc col-4"
                      src={item?.image}
                      alt="Card cap"
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {item?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item?.description}
                      </Typography>

                      <Typography>The Price: {item?.price}$</Typography>

                      <Button onClick={() => increment(index)}>+</Button>
                      {+item?.quantity || 1}
                      <Button onClick={() => decrement(index)}>-</Button>
                      <Typography>
                        All Price : {item?.price * (item?.quantity || 1)}$
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          ))}
        </Box>
      </Drawer>
    </nav>
  );
};
