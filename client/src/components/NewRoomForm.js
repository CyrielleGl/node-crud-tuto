import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select } from 'antd';

const layout = {
    labelCol: {
      span: 20,
    },
    wrapperCol: {
      span: 24,
    },
  };
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const { Option } = Select;

const NewRoomForm = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState(null)

  const onFinish = async (values) => {
    await fetch(`/api/rooms`, { 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values)
    })
    .then(response => response.json())
    .then(data => navigate(`/rooms/${data._id}`));

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = event => {
      const { value, name } = event.target
      setValues({ ...values, [name]: value })
  }

  const [form] = Form.useForm();

  const onPromoChange = (value) => {
    switch (value) {
      case 'true':
        form.setFieldsValue(true);
        return;

      case 'false':
        form.setFieldsValue(false);
        return;

      default:
        return 'false';
    }
  };

  return (
    <Form form={form}
    layout="vertical"
      { ... layout }
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nom"
        name="name"
        rules={[
          {
            required: true,
            message: "Merci d'entrer le nom de la chambre.",
          },
        ]}
      >
        <Input value="name" name="name" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Capacité max"
        name="maxPersons"
        rules={[
          {
            required: false
          },
        ]}
      >
        <Input 
            value="maxPersons"
            type="number" 
            name="maxPersons"
            onChange={handleChange} 
        />
      </Form.Item>

      <Form.Item
        label="En promotion"
        initialValue="false"
        name="promo"
        rules={[
          {
            required: false
          },
        ]}
      >
        <Select
          onChange={onPromoChange}
        >
          <Option value="true">Oui</Option>
          <Option value="false">Non</Option>
        </Select>
      </Form.Item>

      <Form.Item { ... tailLayout }>
        <Button type="primary" htmlType="submit">
          Ajouter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewRoomForm