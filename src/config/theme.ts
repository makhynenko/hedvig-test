import { css } from 'styled-components';

export const MOBILE_MAX_WIDTH: number = 767;
export const TABLET_MAX_WIDTH: number = 1024;

const MEDIA_CONFIG = {
    desktop: (styles: TemplateStringsArray) => css`
        @media (min-width: ${TABLET_MAX_WIDTH + 1}px) {
            ${css(styles)};
        }
    `,
    tablet: (styles: TemplateStringsArray) => css`
        @media (min-width: ${MOBILE_MAX_WIDTH +
            1}px) and (max-width: ${TABLET_MAX_WIDTH}px) {
            ${css(styles)};
        }
    `,
    mobile: (styles: TemplateStringsArray) => css`
        @media (max-width: ${MOBILE_MAX_WIDTH}px) {
            ${css(styles)};
        }
    `,
};

const theme = {
    media: MEDIA_CONFIG,
};

export default theme;
