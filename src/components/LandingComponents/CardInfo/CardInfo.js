import React from "react";
import { Card, Button } from "antd";
import { Checkbox } from "antd";
import { ArrowRightOutlined, UserOutlined } from "@ant-design/icons";

class CardInfo extends React.Component {
  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  render() {
    return (
      <Card bordered={false}>
        <h1>Welcome</h1>
        <p>
          Stay in an authentic high end Danish home and experience Copenhagen as
          a true native.
        </p>
        <div
          style={{
            border: "solid black 2px",
            height: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox onChange={this.onChange} style={{ paddingLeft: "10px" }}>
            Check In
          </Checkbox>
          <ArrowRightOutlined style={{ paddingRight: "10px" }} /> Check Out
        </div>
        <div style={{ display: "flex", marginTop: "5px" }}>
          <div
            style={{
              border: "solid black 2px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
              width: "60%",
              marginRight: "5px",
            }}
          >
            <UserOutlined /> GUESTS
          </div>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              height: "50px",
              alignItems: "center",
              width: "40%",
            }}
          >
            SEARCH
          </Button>
        </div>
      </Card>
    );
  }
}
export default CardInfo;
