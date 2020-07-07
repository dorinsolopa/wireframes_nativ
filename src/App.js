import React from "react";
import "./App.css";
import FooterCard from "./components/Footer/FooterCard";
import { Row, Col } from "antd";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <React.Fragment>
      <AppRouter />
      <div style={{ backgroundColor: "black" }}>
          <Row justify="center">
            <Col span={15}>
              <FooterCard />
            </Col>
          </Row>
        </div>
    </React.Fragment>
  );
}

export default App;
