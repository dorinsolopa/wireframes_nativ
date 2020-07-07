import React from "react";
import { Layout, Menu,  } from "antd";

const { Header, Content, Footer } = Layout;

class Navbar extends React.Component {
  render() {
    return (
      <Layout onBack={() => window.history.back()}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["3"]}>
          <Menu.Item key="1">LOGO</Menu.Item>
          <Menu.Item key="2">MY RESERVATION</Menu.Item>
          <Menu.Item key="3">BOOK</Menu.Item>
        </Menu>
      </Layout>
    );
  }
}
export default Navbar;
