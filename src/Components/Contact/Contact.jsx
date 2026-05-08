import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Segmented,
  Select,
  TreeSelect,
} from 'antd';
import axios from 'axios';
const { RangePicker } = DatePicker;
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
const Contact = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);

  const body={
    name: name,
    email:email,
    mobile:mobile,
    address:address,
    dob:dob
  };

  async function handleSumbit(values)
  {

    await axios.post('https://proxstream.online/public/contact-form',values)
    .then(response=>{
      alert(response.data);
    })
    .catch(error=>{
      alert('There was an error!', error);
    })
  }

  return (
    <>
  
    <h1>Contact Me</h1>
    <Form 
      {...formItemLayout}
      onFinish={handleSumbit}
      form={form}
      variant={variant || 'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
    >
   
      <Form.Item label="Full Name" name="fname"  rules={[{ required: true, message: 'Please enter full name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email"  rules={[{ required: true, message: 'Please enter Email!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Mobile Number"
        name="mobile"
        rules={[{ required: true, message: 'Please enter Mobile Number!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please Enter Address!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="DOB"
        name="DatePicker"
        rules={[{ required: false, message: 'Please Enter DOB!' }]}
      >
        <DatePicker />
      </Form.Item>

     

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>



<br /><br /><br />



      </>
  );
};
export default Contact;