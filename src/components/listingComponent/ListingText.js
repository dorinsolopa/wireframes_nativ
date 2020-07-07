import React from "react";
import { Row, Col } from "antd";

function ListingText(props) {
  const { title, paragraph } = props;
  const tempParagraph = paragraph.split(" ");
  const half = parseInt(tempParagraph.length / 2);
  const firstPart = tempParagraph.slice(0, half);
  const secondPart = tempParagraph.slice(half);
  return (
    <div>
      <h1> <b>{title}</b></h1>

      <Row gutter={[32, 16]}>
        <Col span={12}>{firstPart.join(" ")}</Col>
        <Col span={12}>{secondPart.join(" ")}</Col>
      </Row>
    </div>
  );
}
export default ListingText;
