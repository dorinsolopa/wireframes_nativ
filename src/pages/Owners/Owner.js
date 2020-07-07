import React from "react";
import { Row, Col, Card, Button } from "antd";
import CozyCard from "../../components/LandingComponents/CardInfo/CozyCard";
import CardGrey from "../../components/LandingComponents/CardGrey/CardGrey";
import SmallCard from "../../components/owners/SmallCard";
import GuestCard from "../../components/LandingComponents/CardInfo/GuestCard";
import NavbarHeader from "../../components/Header/Navbar";
import { owner, cozy, infoCozy, guest } from "../../info/Info";
import Actions from "../../components/Actions/Actions";

class Owners extends React.Component {
  render() {
    return (
      <div>
        <Row justify="end">
          <Col>
            <NavbarHeader />
          </Col>
        </Row>

        <div style={{ padding: "40px" }}>
          <Row justify="space-around">
            <Col span={14}>
              <CozyCard title={infoCozy.title} text={infoCozy.text} />
            </Col>
            <Col span={10}>
              <CardGrey />
            </Col>
          </Row>
        </div>

        <div style={{ padding: "40px" }}>
          <Row justify={"center"}>
            <Col span={10}>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Leave your home to hospitality professionals
              </h1>
            </Col>
          </Row>
        </div>
        <div style={{ padding: "40px" }}>
          <Row>
            {owner.map((item) => {
              return (
                <Col span={8}>
                  <SmallCard title={item.title} info={item.info} />
                </Col>
              );
            })}
          </Row>
        </div>
        {cozy.map((item) => {
          return (
            <div
              style={{
                paddingBottom: "100px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <Actions item={item} isRight={item.isRight} />
            </div>
          );
        })}

        <div style={{ paddingBottom: "100px", backgroundColor: "grey" }}>
          <Row justify="center">
            <Col span={15}>
              <GuestCard  title={guest[1].title}
                text={guest[1].text}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row justify="space-around">
            <Col span={14}>
              <Card bordered={false} style={{ paddingBottom: "50px" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 style={{ fontSize: "48px" }}>For owners</h1>
                  </div>

                  <p style={{ fontSize: "18px", color: "black" }}>
                    Do you havea cozy home in Copenhagen? Check out what our
                    team can do for you, and calculate the monthly revenure of
                    your apartment.
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      size="large"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        height: "50px",
                      }}
                    >
                      OWNER SEERVICES
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Owners;
