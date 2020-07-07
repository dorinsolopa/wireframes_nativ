import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import CardGrey from "../LandingComponents/CardGrey/CardGrey";
import CozyCard from "../LandingComponents/CardInfo/CozyCard";

function Actions(props) {
  const { item, isRight } = props;

  return (
    <Row gutter={[32,32]}>
      <Col span={12} order={isRight ? 1 : 0}>
        <CardGrey />
      </Col>
      <Col span={12}>
        <CozyCard
          title={item.title}
          text={item.text}
          textBold={item.textBold}
        />
      </Col>
    </Row>
  );
}

Actions.propTypes = {
  item: PropTypes.object, //sunt  proprietatile care accepta componentul
  isRight: PropTypes.bool, //sunt  din props   componentele, acestea accepta numai  item si isRight
};

export default Actions;
