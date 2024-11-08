import React, { CSSProperties } from "react";

import { Card, Steps as AntdSteps } from "antd";
import { Language, Step, STEPS, STEPS_COPY_MAP } from "./constant";

type Props = {
  language: Language;
  step: Step;
  onChangeStep: (step: Step) => void;
  style?: CSSProperties
};
const Steps = ({ language, step, onChangeStep, style }: Props) => {
  const getSteps = () => {
    return STEPS.map((s) => ({ title: STEPS_COPY_MAP[s][language] }));
  };

  return (
    <Card style={style}>
      <AntdSteps
        items={getSteps()}
        current={STEPS.indexOf(step)}
        onChange={(current) => onChangeStep(STEPS[current])}
      />
    </Card>
  );
};

export default Steps;
