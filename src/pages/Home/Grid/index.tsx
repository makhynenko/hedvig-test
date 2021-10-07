import React from 'react';
import PerilCard from './PerilCard';
import * as s from './styled';
import { IProps } from './types';

const PerilsGrid: React.FC<IProps> = (props) => {
    return (
        <s.GridContainer>
            {props.perils.map((peril) => (
                <PerilCard key={peril.title} {...peril} />
            ))}
        </s.GridContainer>
    );
};

export default PerilsGrid;
