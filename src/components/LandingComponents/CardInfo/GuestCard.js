import React from "react";
import { Card, Button } from "antd";

class GuestCard extends React.Component {
  render() {
    const { title, text } = this.props;
    return (
      <Card
        bordered={false}
        style={{ backgroundColor: "grey", paddingBottom: "50px" , position: "relative" }}
      >
        <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
          <b>{title}</b>
        </h1>
        <p textAlign={"center"}> {text}</p>
        <div style={{ textAlign: "center" }}>
          <Button shape="circle" style={{ backgroundColor: "black" }}>
            SD
          </Button>
          <div>
            <p>
              Guest McGuest
              <p>Paris</p>
            </p>
          </div>
        </div>
      </Card>
    );
  }
}
export default GuestCard;
