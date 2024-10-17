import { Input, Form, Button, Space, Divider } from "antd";
import React, { CSSProperties } from "react";

import AddNewIntegrationImg from "./assets/add_new_integration.jpg";
import FillInDetailsImg from "./assets/fill_in_details.jpeg";
import IntegrationCreatedPopupImg from "./assets/integration_created_popup.jpeg";
import IntegrationCapabilitiesImg from "./assets/capabilities.jpeg";
import ShowSecretImg from "./assets/show_secret.jpeg";
import CopySecretImg from "./assets/copy_secret.jpeg";

import { CollectTokenActionCopy, Language } from "./constant";
import VerticalSpace from "./VerticalSpace";

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

  const renderInstruction = () => {
    const imageStyle: CSSProperties = {
      padding: "10px 0",
    };

    if (language === "English") {
      return (
        <section>
          <h3>Instructions</h3>
          <ol>
            <li>
              Visit Notion's{" "}
              <a
                href="https://www.notion.so/profile/integrations"
                target="_blank"
              >
                My Creator Profile
              </a>
              .
            </li>
            <li>If not logged in, please log into your Notion account.</li>
            <li>
              Click the "+ New Integration" button.
              <br />
              <img
                alt="add new integration"
                width={500}
                src={AddNewIntegrationImg}
                style={imageStyle}
              />
            </li>
            <li>
              Fill in the integration details:
              <ol>
                <li>Name the integration, i.e. Files Transfer Tool.</li>
                <li>Select the appropriate Workspace.</li>
                <li>Choose "Internal" as the Type.</li>
                <li>Click "Save" after completing these fields.</li>
              </ol>
              <img
                alt="fill in details"
                width={800}
                src={FillInDetailsImg}
                style={imageStyle}
              />
            </li>
            <li>
              A popup will appear saying "Integration successfully created",
              with a button labeled "Configure integration settings". Click this
              button.
              <br />
              <img
                alt="integration created popup"
                width={300}
                src={IntegrationCreatedPopupImg}
                style={imageStyle}
              />
            </li>
            <li>
              On the integration settings page, ensure that "Read content",
              "Update content", and "Insert content" are checked by default and
              leave them unchanged.
              <br />
              <img
                alt="remain capabilities unchanged"
                width={800}
                src={IntegrationCapabilitiesImg}
                style={imageStyle}
              />
            </li>
            <li>
              Copy integration secret:
              <ol>
                <li>
                  Click the "Show" button next to the "Internal Integration
                  Secret" input field to reveal the Secret.
                  <br />
                  <img
                    alt="click show secret"
                    width={800}
                    src={ShowSecretImg}
                    style={imageStyle}
                  />
                </li>
                <li>
                  Once shown, the "Show" button will turn into a "Copy" button.
                  Click "Copy" to copy the Secret.
                  <br />
                  <img
                    alt="copy the secret"
                    width={800}
                    src={CopySecretImg}
                    style={imageStyle}
                  />
                </li>
              </ol>
            </li>
            <li>Paste the copied Secret into the input below.</li>
          </ol>
        </section>
      );
    }

    return (
      <section>
        <h3>操作指南</h3>
        <ol>
          <li>
            访问 Notion 的{" "}
            <a
              href="https://www.notion.so/profile/integrations"
              target="_blank"
            >
              My Creator Profile 页面
            </a>
            ；
          </li>
          <li>如未登录，需先登录 Notion 账户；</li>
          <li>
            点击页面中的「+ New Integration」；
            <br />
            <img
              alt="add new integration"
              width={500}
              src={AddNewIntegrationImg}
              style={imageStyle}
            />
          </li>
          <li>
            补充 Integration 的信息：
            <ol>
              <li>为 Integration 命名；</li>
              <li>选择相应的 Workspace；</li>
              <li>
                Type 选择 <code>Internal</code>；
              </li>
              <li>完成后点击 "Save"；</li>
            </ol>
            <img
              alt="fill in details"
              width={800}
              src={FillInDetailsImg}
              style={imageStyle}
            />
          </li>
          <li>
            此时会弹出提示框，显示 Integration 创建成功（Integration
            successfully created），并显示配置按钮（Configure integration
            settings），点击该按钮
            <br />
            <img
              alt="integration created popup"
              width={300}
              src={IntegrationCreatedPopupImg}
              style={imageStyle}
            />
          </li>
          <li>
            进入集成配置页面，默认勾选的 "Read content"、"Update content" 和
            "Insert content" 不需要修改；
            <br />
            <img
              alt="remain capabilities unchanged"
              width={800}
              src={IntegrationCapabilitiesImg}
              style={imageStyle}
            />
          </li>
          <li>
            复制 Integration Secret：
            <ol>
              <li>
                点击 Internal Integration Secret 输入框后的 Show；
                <br />
                <img
                  alt="click show secret"
                  width={800}
                  src={ShowSecretImg}
                  style={imageStyle}
                />
              </li>
              <li>
                Secret 展示后，Show 按钮会变成 Copy。点击 Copy 复制 secret；
                <br />
                <img
                  alt="copy the secret"
                  width={800}
                  src={CopySecretImg}
                  style={imageStyle}
                />
              </li>
            </ol>
          </li>
          <li>将复制的 Secret 粘贴到下方的输入框中。</li>
        </ol>
      </section>
    );
  };

  return (
    <VerticalSpace split={<Divider />}>
      {renderInstruction()}
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
    </VerticalSpace>
  );
};

export default CollectToken;
