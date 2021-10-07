enum LOCALE {
    SWEDISH = 'sv_SE',
    ENGLISH = 'en_SE',
}

enum TYPE_OF_CONTRACT {
    APARTMENT_RENT = 'SE_APARTMENT_RENT',
}

interface IIconData {
    svgUrl: string;
}

interface IIconVariants {
    light: IIconData;
    dark: IIconData;
}

interface IIcon {
    variants: IIconVariants;
}

interface IPeril {
    covered: string[];
    description: string;
    exceptions: string[];
    icon: IIcon;
    info: string;
    shortDescription: string;
    title: string;
}

export { LOCALE, TYPE_OF_CONTRACT };
export type { IPeril };
