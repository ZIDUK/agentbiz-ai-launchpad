import type { Locale } from "./types";
import { messages as en } from "./messages/en";
import { messages as es } from "./messages/es";
import { useLanguage } from "./LanguageProvider";

const catalogs = { en, es } as const;

type MessageTree = typeof en;

type NestedKeyOf<T, Prefix extends string = ""> = T extends string
  ? Prefix extends ""
    ? never
    : Prefix
  : {
      [K in keyof T & string]: NestedKeyOf<
        T[K],
        Prefix extends "" ? K : `${Prefix}.${K}`
      >;
    }[keyof T & string];

export type TranslationKey = NestedKeyOf<MessageTree>;

function resolvePath(tree: MessageTree, key: string): string | undefined {
  const parts = key.split(".");
  let current: unknown = tree;

  for (const part of parts) {
    if (typeof current !== "object" || current === null || !(part in current)) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[part];
  }

  return typeof current === "string" ? current : undefined;
}

export function translate(locale: Locale, key: TranslationKey): string {
  const value = resolvePath(catalogs[locale] as MessageTree, key);
  if (value) return value;

  const fallback = resolvePath(catalogs.en, key);
  return fallback ?? key;
}

export function useTranslation() {
  const { locale } = useLanguage();

  const t = (key: TranslationKey) => translate(locale, key);

  return { t, locale };
}
