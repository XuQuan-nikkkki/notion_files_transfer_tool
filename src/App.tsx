import React, { CSSProperties, useState } from "react";
import { Layout, Radio, ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";

import { Language, LANGUAGE_MAP, LANGUAGES, Step, TITLE_MAP } from "./constant";
import Steps from "./Steps";

const { Header, Content } = Layout;

const DefaultLanguage: Language = "English";
const DefaultStep: Step = "collectToken";

const layoutStyle: CSSProperties = {
  height: "100vh",
};

const headerStyle: CSSProperties = {
  color: "#fff",
  fontSize: 18,
  fontWeight: 800,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const contentStyle: CSSProperties = {
  padding: 10,
};

const App = () => {
  const [language, setLanguage] = useState<Language>(DefaultLanguage);
  const [step, setStep] = useState<Step>(DefaultStep);

  const renderLanguageSelector = () => {
    return (
      <Radio.Group size="small" defaultValue={language}>
        {LANGUAGES.map((lang: Language) => (
          <Radio.Button
            key={lang}
            value={lang}
            checked={lang === language}
            onChange={() => setLanguage(lang)}
          >
            {LANGUAGE_MAP[lang]}
          </Radio.Button>
        ))}
      </Radio.Group>
    );
  };

  return (
    <div className="app">
      <ConfigProvider locale={language === "Chinese" ? zhCN : enUS}>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            {TITLE_MAP[language]}
            {renderLanguageSelector()}
          </Header>
          <Content style={contentStyle}>
            <Steps language={language} step={step} onChangeStep={setStep} />
          </Content>
        </Layout>
      </ConfigProvider>
    </div>
  );
};

export default App;
