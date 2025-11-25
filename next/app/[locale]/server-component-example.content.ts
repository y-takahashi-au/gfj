import { type Dictionary, t } from "intlayer";

const serverComponentContent = {
  key: "server-component-example",
  content: {
    title: t({
      en: "Server Component Example",
      ja: "Server Component Example",
    }),
    description: t({
      en: "This is a server component that uses Intlayer for internationalization. It renders on the server and can access translations directly.",
      ja: "This is a server component that uses Intlayer for internationalization. It renders on the server and can access translations directly.",
    }),
    features: t({
      en: "Features:",
      ja: "Features:",
    }),
    feature1: t({
      en: "Server-side rendering",
      ja: "Server-side rendering",
    }),
    feature2: t({
      en: "Direct translation access",
      ja: "Direct translation access",
    }),
    feature3: t({
      en: "SEO optimized",
      ja: "SEO optimized",
    }),
  },
} satisfies Dictionary;

export default serverComponentContent;
