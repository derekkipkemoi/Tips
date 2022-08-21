import React from "react";
import { Button, Checkbox, Form, Input, Card, Typography } from "antd";
const { Title } = Typography;

export default function Contact() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Card
        title={
          <Title
            style={{
              marginBottom: "10px",
              fontSize: " 24px",
              color: "#1890ff",
            }}
            level={2}
          >
            Contact Us
          </Title>
        }
        bordered={false}
        style={{ marginBottom: "10px", fontSize: " 20px" }}
      >
        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Your Name"
            name="name"
            
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter Name" style={{marginLeft: "15px"}}/>
          </Form.Item>

          <Form.Item
            label="Your Email"
            name="nmail"
            
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input placeholder="Enter Email" style={{marginLeft: "15px"}}/>
          </Form.Item>

          <Form.Item
            label="Subject"
            name="subject"
            
            rules={[{ required: false }]}
          >
            <Input placeholder="Enter Subject" style={{marginLeft: "15px"}}/>
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            
            rules={[{ required: false }]}
          >
            <Input.TextArea placeholder="Enter Message" style={{marginLeft: "15px"}}/>
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
