import React from "react";
import { Card } from "antd";

class FooterCard extends React.Component {
  render() {
    return (
      <Card bordered={false} style={{ backgroundColor: "black" }}>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div>
            It's a black footer
            <div> It's not racism</div>
          </div>
        </div>
      </Card>
    );
  }
}
export default FooterCard;
