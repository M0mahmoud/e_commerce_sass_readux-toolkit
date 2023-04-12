import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <button className="btn sidebar-hide-btn">
        <i className="fas fa-times"></i>
      </button>
      <div className="cnt">
        <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
          All Categories
        </div>
        <ul className="list">
          <li>
            <Link to={"/"} className="link  text-capitalize">
              ONE
            </Link>
          </li>
          <li>
            <Link to={"/"} className="link  text-capitalize">
              ONE
            </Link>
          </li>
          <li>
            <Link to={"/"} className="link  text-capitalize">
              ONE
            </Link>
          </li>
          <li>
            <Link to={"/"} className="link  text-capitalize">
              ONE
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
