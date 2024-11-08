import { Input, Form, Button, Space, Divider } from "antd";
import React from "react";

import { CollectSecretActionCopy, Language } from "./constant";
import CollectSecretInstruction from "./CollectSecretInstruction";

const { useForm, Item: FormItem } = Form;

type Props = {
  language: Language;
};
const CollectSecret = ({ language }: Props) => {
  const [form] = useForm();

  const onSubmit = () => {
    const secret = form.getFieldValue("secret");
    console.log(secret);
  };

  const onClear = () => {
    form.setFieldsValue({ secret: "" });
  };

  return (
    <div className="container">
      <CollectSecretInstruction language={language} />
      <Divider type="vertical" style={{ height: "100%", margin: "0 24px" }} />
      <Form form={form}>
        <FormItem name="secret" label="Secret:" rules={[{ required: true }]}>
          <Input style={{ width: 400 }} />
        </FormItem>
        <FormItem>
          <Space>
            <Button htmlType="submit" type="primary" onClick={onSubmit}>
              {CollectSecretActionCopy.saveSecret[language]}
            </Button>
            <Button danger onClick={onClear}>
              {CollectSecretActionCopy.clearSecret[language]}
            </Button>
          </Space>
        </FormItem>
      </Form>
      <style>
        {`
          .container {
            display: flex;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default CollectSecret;
