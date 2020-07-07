import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
class OwnerServices extends React.Component {
  render() {
    return (
      <Card bordered={false} style={{ paddingBottom: "50px" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ fontSize: "48px" }}>For owners</h1>
          </div>

          <p style={{ fontSize: "18px", color: "black" }}>
            Do you havea cozy home in Copenhagen? Check out what our team can do
            for you, and calculate the monthly revenure of your apartment.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/owners">
              <Button
                size="large"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  height: "50px",
                }}
              >
                OWNER SEERVICES
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    );
  }
}
export default OwnerServices;
