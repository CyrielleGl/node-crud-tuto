import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const { Option } = Select;

const RoomForm = ({ id, room, setRoom }) => {
    const navigate = useNavigate()
    const [values, setValues] = useState(null)

  useEffect(() => {
    setValues(room)
  }, [room, id])

  const onFinish = async (values) => {
    await fetch(`/api/rooms/${id}`, { 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(values)
    })

    setRoom(values)
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

  const handleDelete = async () => {
    await fetch(`/api/rooms/${id}`, { 
        method: 'DELETE'
    })

    navigate('/rooms')
  }

  if (!values) return null

  return (
    <Form form={form}
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
        initialValue={values.name}
        rules={[
          {
            required: true,
            message: "Merci d'entrer le nom de la chambre.",
          },
        ]}
      >
        <Input value={values.name} name="name" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Capacité max"
        name="maxPersons"
        initialValue={values.maxPersons}
        rules={[
          {
            required: false
          },
        ]}
      >
        <Input 
            value={values.maxPersons} 
            type="number" 
            name="maxPersons"
            onChange={handleChange} 
        />
      </Form.Item>

      <Form.Item
        label="En promotion"
        name="promo"
        initialValue={values.promo === true ? "true" : "false"}
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
          Soumettre
        </Button>
        <Button onClick={handleDelete} type="danger" style={{ marginLeft: '1rem' }}>
            Supprimer
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RoomForm