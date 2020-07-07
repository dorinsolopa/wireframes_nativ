import React from "react";
import { Card } from "antd";
function ContactInfo(props) {
  const { email, phone, info } = props;
  return (
    <Card bordered={false} style={{ paddingLeft: "100px" }}>
      <div>
        <h1>Contact us</h1>
        <p>
          {info}
          <br />
          <br /> {email}
          <br /> <br />
          {phone}
        </p>
      </div>
    </Card>
  );
}
export default ContactInfo;
