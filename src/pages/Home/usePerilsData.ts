import { useEffect, useMemo, useState } from 'react';
import { LOCALE, TYPE_OF_CONTRACT } from '../../types/general';

export const usePerilsData = <T>(
    typeOfContract: TYPE_OF_CONTRACT,
    locale: LOCALE
) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(
            `https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=${typeOfContract}&locale=${locale}`
        )
            .then((response) => {
                response.json().then((result) => {
                    setData(result);
                    setLoading(false);
                });
            })
            .catch((e) => {
                setError(e);
                setLoading(false);
            });
    }, [locale, typeOfContract]);

    const result = useMemo(
        () => ({
            loading,
            data,
            error,
        }),
        [data, error, loading]
    );

    return result;
};
