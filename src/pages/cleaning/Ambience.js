import React from "react";
import NavbarHeader from "../../components/Header/Navbar";
import CleanHospital from "../../components/clean/CleanHospital";
import CardGrey from "../../components/LandingComponents/CardGrey/CardGrey";
import { ambience } from "../../info/Info";
import { Col, Row, Card } from "antd";
class Ambience extends React.Component {
  render() {
    return (
      <Card>
        <Row>
          <Col>
            <NavbarHeader />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <CleanHospital title={ambience.title} info={ambience.info} />
          </Col>
          <Col span={12}>
            <CardGrey />
          </Col>
        </Row>
      </Card>
    );
  }
}
export default Ambience;
