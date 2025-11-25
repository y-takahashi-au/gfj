import { type Dictionary, t } from "intlayer";

const localeSwitcherContent = {
  key: "locale-switcher",
  content: {
    title: t({
      en: "Language",
      ja: "Language",
    }),
    selectLanguage: t({
      en: "Select Language",
      ja: "Select Language",
    }),
    currentLanguage: t({
      en: "Current language",
      ja: "Current language",
    }),
    changeLanguage: t({
      en: "Change language",
      ja: "Change language",
    }),
  },
} satisfies Dictionary;

export default localeSwitcherContent;
