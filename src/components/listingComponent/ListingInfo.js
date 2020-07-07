import React from "react";
import { Card } from "antd";
function ListingInfo() {
  return (
    <Card
      bordered={false}
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      <h1 style={{ fontSize: "38px" }}>Islands Brygge 36</h1>
      <p>Basic information about the listing</p>
    </Card>
  );
}
export default ListingInfo;
