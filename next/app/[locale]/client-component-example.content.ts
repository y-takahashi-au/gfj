import { type Dictionary, t } from "intlayer";

const clientComponentContent = {
  key: "client-component-example",
  content: {
    title: t({
      en: "Client Component Example",
      ja: "Client Component Example",
    }),
    content: t({
      en: "This is a client component that uses Intlayer for internationalization.",
      ja: "This is a client component that uses Intlayer for internationalization.",
    }),
  },
} satisfies Dictionary;

export default clientComponentContent;
