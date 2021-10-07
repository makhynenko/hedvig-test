import { FC, useCallback } from 'react';
import { useLocale } from '../../context/Locale';
import { LOCALE } from '../../types/general';
import * as s from './styled';

const Header: FC = () => {
    const { changeLocale, locale } = useLocale();
    const onLocaleClick = useCallback(
        (newLocale: LOCALE) => () => {
            changeLocale(newLocale);
        },
        [changeLocale]
    );

    return (
        <s.HeaderContainer>
            <s.LocaleContainer>
                <s.LocaleButton
                    onClick={onLocaleClick(LOCALE.SWEDISH)}
                    selected={locale === LOCALE.SWEDISH}
                >
                    Sv
                </s.LocaleButton>
                <s.Separator />
                <s.LocaleButton
                    onClick={onLocaleClick(LOCALE.ENGLISH)}
                    selected={locale === LOCALE.ENGLISH}
                >
                    En
                </s.LocaleButton>
            </s.LocaleContainer>
        </s.HeaderContainer>
    );
};

export default Header;
