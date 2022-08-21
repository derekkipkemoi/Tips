import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";

export default function NavBar() {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["0"]}
      className="container"
    >
      {MainMenu.map((_, index) => {
        const key = index + 1;
        return (
          <Menu.Item key={key}>
            <Link to={_.path}>
              <span className="nav-text">{_.name}</span>
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}
