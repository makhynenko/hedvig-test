import React from 'react';
import { IPeril } from '../../../types/general';
import * as s from './styled';

const PerilCard: React.FC<IPeril> = (props) => {
    return (
        <s.PerilsCardContainer>
            <s.PerilsCard>
                <s.PerisIcon alt="" src={props.icon.variants.light.svgUrl} />
                <s.PerisTitle>{props.title}</s.PerisTitle>
            </s.PerilsCard>
        </s.PerilsCardContainer>
    );
};

export default PerilCard;
