import { cacheLife } from 'next/cache';
import { createHighlighterCore, isSpecialLang } from 'shiki/core';
import type { HighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';

const THEMES = {
  dark: 'vitesse-dark',
  light: 'vitesse-light',
} as const;

let highlighterPromise: Promise<HighlighterCore> | undefined;

const getHighlighter = (): Promise<HighlighterCore> => {
  highlighterPromise ??= createHighlighterCore({
    engine: createOnigurumaEngine(import('shiki/wasm')),
    langs: [
      import('shiki/langs/css.mjs'),
      import('shiki/langs/diff.mjs'),
      import('shiki/langs/go.mjs'),
      import('shiki/langs/graphql.mjs'),
      import('shiki/langs/html.mjs'),
      import('shiki/langs/javascript.mjs'),
      import('shiki/langs/json.mjs'),
      import('shiki/langs/python.mjs'),
      import('shiki/langs/rust.mjs'),
      import('shiki/langs/shellscript.mjs'),
      import('shiki/langs/sql.mjs'),
      import('shiki/langs/typescript.mjs'),
      import('shiki/langs/yaml.mjs'),
    ],
    themes: [import('shiki/themes/vitesse-dark.mjs'), import('shiki/themes/vitesse-light.mjs')],
  });

  return highlighterPromise;
};

const resolveLanguage = (lang: string, loaded: readonly string[]): string => {
  if (lang === '' || isSpecialLang(lang) || !loaded.includes(lang)) {
    return 'text';
  }

  return lang;
};

const highlightCode = async (code: string, lang: string): Promise<string> => {
  'use cache';
  cacheLife('max');

  const highlighter = await getHighlighter();

  return highlighter.codeToHtml(code, {
    lang: resolveLanguage(lang, highlighter.getLoadedLanguages()),
    themes: THEMES,
  });
};

export { highlightCode };
