import React from "react";
import { Layout, Row, Col } from "antd";
import CardAbout from "../../components/about/CardAbout";
import CardGrey from "../../components/LandingComponents/CardGrey/CardGrey";
import NavbarHeader from "../../components/Header/Navbar";
import GuestCard from "../../components/LandingComponents/CardInfo/GuestCard";
import { about, guest } from "../../info/Info";
import Actions from "../../components/Actions/Actions";
class About extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col>
              <NavbarHeader />
            </Col>
          </Row>
        </div>
        <div style={{ padding: "60px" }}>
          {about.map((item) => {
            return (
              <div style={{ paddingBottom: "100px" }}>
                <Actions item={item} isRight={item.isRight} />
              </div>
            );
          })}
        </div>
        <div style={{ backgroundColor: "grey" }}>
          <Row justify="center">
            <Col span={12}>
              <GuestCard  title={guest[2].title} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default About;
