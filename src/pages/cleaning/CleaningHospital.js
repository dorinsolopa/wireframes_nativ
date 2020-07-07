import React from "react";
import CardGrey from "../../components/LandingComponents/CardGrey/CardGrey";
import { cleaning } from "../../info/Info";
import CleanHospital from "../../components/clean/CleanHospital";
import { Card, Row, Col } from "antd";
import NavbarHeader from "../../components/Header/Navbar";

class CleaningHospital extends React.Component {
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
                <CleanHospital title={cleaning.title} info={cleaning.info} />
              </Col>
              <Col span={12}>
                <CardGrey />
              </Col>
            </Row>
       
      </Card>
    );
  }
}

export default CleaningHospital;
