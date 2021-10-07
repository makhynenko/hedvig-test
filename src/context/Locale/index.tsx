import React, { useCallback, useContext, useMemo, useState } from 'react';
import { LOCALE } from '../../types/general';
import { ILocaleContext } from './types';

export const LocaleContext = React.createContext<ILocaleContext>({
    changeLocale: () => {},
    locale: LOCALE.ENGLISH,
});

export const LocaleContextProvider: React.FC = ({ children }) => {
    const [locale, setLocale] = useState<LOCALE>(LOCALE.ENGLISH);

    const changeLocale = useCallback((newLocale: LOCALE) => {
        console.log('changeLocale', newLocale);
        setLocale(newLocale);
    }, []);

    const contextValue = useMemo(
        () => ({
            locale,
            changeLocale,
        }),
        [locale, changeLocale]
    );

    return (
        <LocaleContext.Provider value={contextValue}>
            {children}
        </LocaleContext.Provider>
    );
};
export const useLocale = () => useContext(LocaleContext);
