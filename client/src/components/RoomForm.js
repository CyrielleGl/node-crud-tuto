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

const RoomForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
        rules={[
          {
            required: true,
            message: "Merci d'entrer le nom de la chambre.",
          },
        ]}
      >
        <Input name="name" />
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
        <Input type="number" name="maxPersons" />
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