import React from "react";
import "styles/middlenavbar.css";
import line from "assets/images/line.png";
import LastNav from "./LastNav";
import useWindowWidth from "utils/windowWidth";

const MiddleNav = () => {
  const count = 0;
  const windowWidth = useWindowWidth();
  return (
    <div className="header">
      <div className="middle-navbar">
        <div className="middle-title">ShopKart</div>
        {windowWidth > 600 ? (
          <ul className="middle-items">
            <li>WISHLIST ({count})</li>
            <li>BAG ({count})</li>
          </ul>
        ) : (
          <LastNav />
        )}
      </div>
      <img src={line} alt="line-img" />
      {windowWidth > 600 && <LastNav />}
    </div>
  );
};

export default MiddleNav;
