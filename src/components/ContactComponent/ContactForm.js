import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

class ContactForm extends React.Component {
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const validateMessages = {
      required: "${label} is required!",
      types: {
        email: "${label} is not validate email!",
        number: "${label} is not a validate number!",
        contact: "${label is not a validate contact!",
      },
      number: {
        range: "${label} must be between ${min} and ${max}",
      },
    };

    const Demo = () => {
      const onFinish = (values) => {
        console.log(values);
      };
    };

    return (
      <div style={{ paddingLeft: "100px" }}>
        <div>
          <h1> Contact form</h1>
        </div>
        <Form
          {...layout}
          name="nest-messages"
          //   onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            style={{ marginBottom: "5px" }}
            name={["user", "name"]}
            rules={[{ required: true }]}
          >
            <Input size="large" prefix={<Checkbox />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "5px" }}
            name={["user", "contact"]}
            rules={[{ type: "contact" }]}
          >
            <Input
              size="large"
              prefix={<Checkbox />}
              placeholder="Contact back type"
            />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "5px" }}
            name={["user", "email"]}
            rules={[{ type: "email" }]}
          >
            <Input size="large" prefix={<Checkbox />} placeholder="Email" />
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }} name={["user", "message"]}>
            <Input.TextArea size="large" placeholder="Message" />
          </Form.Item>
          <Checkbox>GDPR things</Checkbox>
          <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
            <Button
              block
              size="large"
              style={{ backgroundColor: "black", color: "white",marginTop:"20px" }}
            >
              SEND
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
