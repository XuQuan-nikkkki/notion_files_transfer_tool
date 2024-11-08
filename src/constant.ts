export const LANGUAGES = ["English", "Chinese"] as const;
export type Language = (typeof LANGUAGES)[number];

type LanguageToCopy = {
  [key in Language]: string;
};

export const LANGUAGE_MAP: LanguageToCopy = {
  English: "English",
  Chinese: "中文",
};

export const TITLE_MAP: LanguageToCopy = {
  English: "Notion Files Transfer Tool",
  Chinese: "Notion 文件搬家工具",
};

export const STEPS = [
  "collectSecret",
  "selectDatabases",
  "matchProperties",
  "transferFiles",
] as const;
export type Step = (typeof STEPS)[number];

export const STEPS_COPY_MAP: { [key in Step]: LanguageToCopy } = {
  collectSecret: {
    English: "Collect Secret",
    Chinese: "收集 Secret",
  },
  selectDatabases: {
    English: "Select Databases",
    Chinese: "选择数据库",
  },
  matchProperties: {
    English: "Match Properties",
    Chinese: "匹配属性",
  },
  transferFiles: {
    English: "Transfer Files",
    Chinese: "传输文件",
  },
};

export const CollectSecretnActionCopy: { [key: string]: LanguageToCopy } = {
  saveSecret: {
    English: "Save Secret",
    Chinese: "保存 Secret",
  },
  clearSecret: {
    English: "Clear Secret",
    Chinese: "清空 Secret",
  },
};
