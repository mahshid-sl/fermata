"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `جایـــی
برای مکث در زمان 𝄐
`;

export function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}
