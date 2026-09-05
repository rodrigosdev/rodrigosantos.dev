import { cacheLife } from 'next/cache';
import { bundledLanguages, bundledLanguagesAlias, codeToHtml } from 'shiki';
import type { BundledLanguage } from 'shiki';

const THEMES = {
  dark: 'vitesse-dark',
  light: 'vitesse-light',
} as const;

const isBundledLanguage = (lang: string): lang is BundledLanguage => {
  return Object.hasOwn(bundledLanguages, lang) || Object.hasOwn(bundledLanguagesAlias, lang);
};

const resolveLanguage = (lang: string): BundledLanguage | 'text' => {
  if (lang === '' || lang === 'plain' || lang === 'plaintext' || lang === 'txt') {
    return 'text';
  }

  if (isBundledLanguage(lang)) {
    return lang;
  }

  return 'text';
};

const highlightCode = async (code: string, lang: string): Promise<string> => {
  'use cache';
  cacheLife('days');

  return codeToHtml(code, {
    lang: resolveLanguage(lang),
    themes: THEMES,
  });
};

export { highlightCode };
