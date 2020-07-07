import React from "react";
import CardGrey from "../../components/LandingComponents/CardGrey/CardGrey";
import { Card, Col, Row, Button, Layout } from "antd";
import CardInfo from "../../components/LandingComponents/CardInfo/CardInfo";
import CozyCard from "../../components/LandingComponents/CardInfo/CozyCard";
import CardCenter from "../../components/LandingComponents/CardInfo/CardCenter";
import CardWork from "../../components/LandingComponents/CardInfo/CardWorks";
import GuestCard from "../../components/LandingComponents/CardInfo/GuestCard";
import Header from "../../components/Header/Header";
import { work, hugge ,guest} from "../../info/Info";
import OwnerServices from "../../components/LandingComponents/CardInfo/OwnerServices";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Row justify="center" align="stretch">
          <Col span={7}>
            <CardInfo />
          </Col>

          <Col span={15}>
            <CardGrey />
          </Col>
        </Row>
        <div
          style={{
            marginTop: "80px",
          }}
        >
          <Row justify="center" align="stretch">
            <Col span={7}>
              <CardGrey />
            </Col>
            {hugge.map((ex) => {
              return (
                <Col span={15}>
                  <CozyCard title={ex.title} text={ex.text} />
                </Col>
              );
            })}
          </Row>
        </div>
        <Row justify="center">
          <Col span={12}>
            <CardCenter />
          </Col>
        </Row>
        <div style={{ marginLeft: "45px", marginRight: "45px" }}>
          <Row justify="center" gutter={[8, 8]}>
            {[...Array(8).keys()].map(() => {
              // afisarea a 8 Carduri fara a restrie
              return (
                <Col span={6}>
                  <CardGrey height="150px" />
                </Col>
              );
            })}
          </Row>
        </div>
        <div>
          <Row justify="center">
            <Col span={12}>
              <Card bordered={false}>
                <div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1>How it works</h1>
                  </div>

                  <p style={{ fontSize: "18px", color: "black" }}>
                    All cur homes include prefessional cleaning 24/7support and
                    the highest quality amenties with real Danish brands we use
                    day to day.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ marginLeft: "50px", marginRight: "50px" }}>
          <Row>
            {work.map((item) => {
              return (
                <Col span={8}>
                  <CardWork text={item.text} />
                </Col>
              );
            })}
          </Row>
        </div>
        <div style={{ backgroundColor: "grey" }}>
          <Row justify="center">
            <Col span={15}>
              <GuestCard title={guest[0].title}
                text={guest[0].text}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row justify="space-around">
            <Col span={14}>
              <OwnerServices />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default LandingPage;
