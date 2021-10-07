import { LOCALE } from "../../types/general";

interface ILocaleContext {
    changeLocale: (language: LOCALE) => void;
    locale: LOCALE;
}

export type { ILocaleContext };
