import React from "react";
import { Row, Col } from "antd";
import CardGrey from "../../components/LandingComponents/CardGrey/CardGrey";
import ListingInfo from "../../components/listingComponent/ListingInfo";
import NavbarHeader from "../../components/Header/Navbar";
import ListingText from "../../components/listingComponent/ListingText";
import GuestCard from "../../components/LandingComponents/CardInfo/GuestCard";
import Calculate from "../../components/calculate/Calculate";
import { listing ,guest} from "../../info/Info";
class Listing extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col>
              <NavbarHeader />
            </Col>
          </Row>
        </div>
        <div
          style={{
            paddingBottom: "100px",
            paddingRight: "40px",
            paddingLeft: "40px",
          }}
        >
          <Row justify="space-around">
            <Col span={12}>
              <ListingInfo />
            </Col>
            <Col span={11}>
              <CardGrey />
            </Col>
          </Row>
        </div>
        <div style={{ padding: "60px" }}>
          {listing.map((item) => {
            return (
              <ListingText title={item.title} paragraph={item.paragraph} />
            );
          })}
        </div>
        <div style={{ backgroundColor: "grey" }}>
          <Row justify="center">
            <Col span={15}>
              <GuestCard  title={guest[3].title}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Listing;
