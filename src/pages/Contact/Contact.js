import React from "react";
import NavbarHeader from "../../components/Header/Navbar";
import { Row, Col } from "antd";
import ContactInfo from "../../components/ContactComponent/ContactInfo";
import Map from "../../components/ContactComponent/Map";
import ContactForm from "../../components/ContactComponent/ContactForm";
import { contact } from "../../info/Info";
import Calculate from "../../components/calculate/Calculate";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Row justify="end">
            <Col>
              <NavbarHeader />
            </Col>
          </Row>
        </div>
        <div style={{ marginBottom: "100px" }}>
          <Row justify="start">
            <Col span={13}>
              <ContactInfo
                email={contact.email}
                phone={contact.phone}
                info={contact.info}
              />
            </Col>

            <Col span={7}>
              <div style={{ boxShadow: "2px 3px 4px 5px" }}>
                <Map />
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ position: "relative" }}>
          <Row justify="start">
            <Col span={7}>
              <ContactForm />
            </Col>
            <Calculate style={{ bottom: "-15px", right: "300px" }} />
          </Row>
        </div>
      </div>
    );
  }
}
export default Contact;
