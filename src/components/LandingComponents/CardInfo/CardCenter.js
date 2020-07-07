import React from "react";
import { Card } from "antd";
class CardCenter extends React.Component {
  render() {
    return (
      <Card bordered={false}>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Enjoy your stay</h1>
          </div>

          <p style={{ fontSize: "18px", color: "black" }}>
            All cur homes include prefessional cleaning 24/7support and the
            highest quality amenties with real Danish brands we use day to day.
          </p>
        </div>
      </Card>
    );
  }
}
export default CardCenter;
