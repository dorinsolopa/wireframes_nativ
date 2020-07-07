import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
class NavbarHeader extends React.Component {
  render() {
    return (
      <div style={{ paddingBottom: "30px" }}>
        <Menu mode="horizontal" defaultSelectedKeys={["5"]}>
          <Menu.Item key="1">ABOUT US</Menu.Item>

          <Menu.Item key="2">CONTACT</Menu.Item>

          <Menu.Item key="3">JOIN</Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default NavbarHeader;
