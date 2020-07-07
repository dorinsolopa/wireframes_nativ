import React from "react";
import { Card } from "antd";

class SmallCard extends React.Component {
  render() {
    const { title, info } = this.props;
    return (
      <Card bordered={false} style={{ paddingBottom: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "grey",
              height: "50px",
              width: "50px",
            }}
          ></div>
        </div>

        <div>
          <h2 style={{ textAlign: "center" }}>{title}</h2>
          <p>{info}</p>
        </div>
      </Card>
    );
  }
}
export default SmallCard;
