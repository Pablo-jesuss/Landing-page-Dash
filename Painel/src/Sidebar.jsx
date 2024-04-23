import React from "react";
import { BsCart3 } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close-icon">X</span>
      </div>
    </aside>
  );
};

export default Sidebar;
