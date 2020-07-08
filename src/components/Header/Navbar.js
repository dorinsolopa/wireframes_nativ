import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
class NavbarHeader extends React.Component {
  render() {
    return (
      <div
        style={{
          paddingBottom: "30px",
        }}
      >
        <Menu mode="horizontal" defaultSelectedKeys={["5"]}>
          <Menu.Item key="1">
            <Link to="/about">ABOUT US</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/contact">CONTACT</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/owners">OWNER</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/listing">LISTING</Link>
          </Menu.Item>

          <Menu.Item key="5">
            <Link to="/"> JOIN</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default NavbarHeader;
