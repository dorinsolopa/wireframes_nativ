import React from "react";
import { Card } from "antd";
class CozyCard extends React.Component {
  render() {
    const { title, text, textBold } = this.props;
    return (
      <Card bordered={false}>
        <div style={{ paddingLeft: "16px" }}>
          <h1>
            <b>{title}</b>
          </h1>

          <p style={{ fontSize: "18px" }}>{text}</p>
          <p>{textBold}</p>
        </div>
      </Card>
    );
  }
}
export default CozyCard;
