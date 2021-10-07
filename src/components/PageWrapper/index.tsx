import { FC } from 'react';
import Header from '../../components/Header';
import * as s from './styled';

const PageWrapper: FC = (props) => {
    return (
        <>
            <Header />
            <s.PageWrapper>{props.children}</s.PageWrapper>
        </>
    );
};

export default PageWrapper;
