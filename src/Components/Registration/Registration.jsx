import React, { useState } from 'react';
import { Spin, Button, DatePicker, Form, Input, InputNumber } from 'antd';
import axios from 'axios';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const Registration = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(values) {
    try {
      setLoading(true);
      await axios.post('https://proxstream.online/public/register', values);
      alert("Registration successful!");
    } catch (error) {
      alert("There was an error!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Spin spinning={loading} tip="Registering..." size="large">
      <div style={{ minHeight: '100vh', paddingTop: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Register</h1>

        <Form
          {...formItemLayout}
          form={form}
          onFinish={handleSubmit}
          style={{ maxWidth: 600, margin: '0 auto' }}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please enter full name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter Email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Role" name="role">
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="phone"
            rules={[{ required: true, message: 'Please enter Mobile Number!' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Spin>
  );
};

export default Registration;