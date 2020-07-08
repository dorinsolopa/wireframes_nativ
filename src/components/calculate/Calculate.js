import React from "react";
import { Card, Form, Input, Button, Radio } from "antd";
class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }
  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const {style} = this.props;
    return (
      <div
        style={{
          marginTop: "150px",
          position: "absolute",
          zIndex: "1",
          boxShadow: "2px 3px 3px 2px",
          ...style 
        }}
      >
        <Card>
          <Form style={{ display: "flex", alignItems: "center" }}>
            <Form.Item>
              <Input
                style={{
                  borderBottom: "solid 2px black",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  paddingRight: "20px",
                }}
                placeholder="Address"
              />
            </Form.Item>
            <p style={{ marginRight: "15px", marginLeft: "15px",paddingTop:"13px" }}>
              <b>Bedrooms:</b>
            </p>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>3+</Radio>
            </Radio.Group>
            <Button style={{ backgroundColor: "black", color: "white" }}>
              Calculate
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Calculate;
