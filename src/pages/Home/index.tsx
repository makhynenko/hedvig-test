import { FC } from 'react';
import { useLocale } from '../../context/Locale';
import PerilsGrid from './Grid';
import { IPeril, TYPE_OF_CONTRACT } from '../../types/general';
import * as s from './styled';
import { usePerilsData } from './usePerilsData';

const Home: FC = () => {
    const { locale } = useLocale();

    const { data, loading, error } = usePerilsData<IPeril[]>(
        TYPE_OF_CONTRACT.APARTMENT_RENT,
        locale
    );

    if (loading) {
        return <s.Message>Loading...</s.Message>;
    }

    if (error) {
        return <s.Message>Something went wrong. Try again later</s.Message>;
    }

    return data && <PerilsGrid perils={data} />;
};

export default Home;
