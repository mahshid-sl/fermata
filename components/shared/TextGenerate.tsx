"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";

export function TextGenerate({ words }: { words: string }) {
  return <TextGenerateEffect words={words} />;
}
