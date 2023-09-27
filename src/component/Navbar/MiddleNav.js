import React from "react";
import "styles/middlenavbar.css";
import line from "assets/images/line.png";
import LastNav from "./LastNav";
import useWindowWidth from "utils/windowWidth";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MiddleNav = () => {
  const count = useSelector((state)=>state?.cart?.cartsize);

  const windowWidth = useWindowWidth();
  return (
    <div className="header">
      <div className="middle-navbar">
        <div className="middle-title"><Link to="/">ShopKart</Link></div>
        {windowWidth > 600 ? (
          <ul className="middle-items">
            <li><Link to="/cart">Cart({count})</Link></li>
          </ul>
        ):(
          <LastNav />
        )}
      </div>
      <img src={line} alt="line-img" />
      {windowWidth > 600 && <LastNav />}
    </div>
  );
};

export default MiddleNav;
