import React from "react";
import { Card } from "antd";
class CardWork extends React.Component {
  render() {
    const {text}= this.props
    return (
      <Card bordered={false}>
        <p style={{textAlign:"center", padding:"20px"}}>
       {text}
        </p>
      </Card>
    );
  }
}
export default CardWork;
