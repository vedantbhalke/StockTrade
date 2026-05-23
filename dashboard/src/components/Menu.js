import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setSelectedMenu(0);
    else if (path === "/holdings") setSelectedMenu(1);
    else if (path === "/positions") setSelectedMenu(2);
    else if (path === "/funds") setSelectedMenu(3);
    else if (path === "/orders") setSelectedMenu(4);
  }, [location]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    window.location.href = process.env.REACT_APP_FRONTEND_URL;
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="img" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <div className="avatar">VB</div>
          <p className="username">HOME</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;