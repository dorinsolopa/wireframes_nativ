import React from "react";
import { Card } from "antd";
import { Info } from "../../info/Info";
class CardAbout extends React.Component {
  render() {
    return (
      <Card bordered={false}>
        <div>
          <h1>Host-minded, always.</h1>
          <p >
            This section is about the apartaments how they are very unique and
            authentic. Telling about furniture and interior design, location ,
            and extra things
          </p>
        </div>
      </Card>
    );
  }
}
export default CardAbout;
