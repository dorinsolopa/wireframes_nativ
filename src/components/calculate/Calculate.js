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
    return (
      <Card style={{display:"flex" ,justifyContent:"between"}}>
        <Form>
          <Form.Item>
            <Input placeholder="Address" />
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <p>Bedrooms:</p>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>3+</Radio>
            </Radio.Group>
            <Button style={{ backgroundColor: "black", color: "white" }}>
              Calculate
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
export default Calculate;
