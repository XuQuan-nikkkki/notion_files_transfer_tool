import { Input, Form, Button, Space } from "antd";
import React from "react";

import { CollectTokenActionCopy, Language } from "./constant";

const { useForm, Item: FormItem } = Form;

type Props = {
  language: Language;
};
const CollectToken = ({ language }: Props) => {
  const [form] = useForm();

  const onSubmit = () => {
    const token = form.getFieldValue("token");
    console.log(token);
  };

  const onClear = () => {
    form.setFieldsValue({ token: "" });
  };

  return (
    <div>
      <Form form={form}>
        <FormItem name="token" label="Token:" rules={[{ required: true }]}>
          <Input style={{ width: 400 }} />
        </FormItem>
        <FormItem>
          <Space>
            <Button htmlType="submit" type="primary" onClick={onSubmit}>
              {CollectTokenActionCopy.saveToken[language]}
            </Button>
            <Button danger onClick={onClear}>
              {CollectTokenActionCopy.clearToken[language]}
            </Button>
          </Space>
        </FormItem>
      </Form>
    </div>
  );
};

export default CollectToken;
