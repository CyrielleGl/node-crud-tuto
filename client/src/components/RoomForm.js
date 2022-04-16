import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

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

const RoomForm = ({ id, room, setRoom }) => {
  const [values, setValues] = useState(null)

  useEffect(() => {
    setValues(room)
    console.log(values)
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

    console.log('Success:', values);
    setRoom(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = event => {
      const { value, name } = event.target
      setValues({ ...values, [name]: value })
  }

  if (!values) return null

  return (
    <Form
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

      <Form.Item { ... tailLayout }>
        <Button type="primary" htmlType="submit">
          Soumettre
        </Button>
        <Button type="danger" style={{ marginLeft: '1rem' }}>
            Supprimer
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RoomForm