"use client";

import { getHTMLTextDir, getLocaleName, getLocalizedUrl } from "intlayer";
import Link from "next/link";
import { useIntlayer, useLocale, useLocaleStorage } from "next-intlayer";
import { type FC, useRef, useState } from "react";

export const AboutUs: FC = () => {
  const content = useIntlayer("about-us");

  return (
    <div>
      <h3 className="pt-5 text-xl font-bold">{content.title.value}</h3>
      <p>{content.description.value}</p>
    </div>
  );
};
