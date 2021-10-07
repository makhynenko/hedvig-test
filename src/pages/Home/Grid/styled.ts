import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    ${({ theme }) => theme.media.tablet`
        grid-template-columns: 1fr 1fr 1fr;
    `};
    ${({ theme }) => theme.media.mobile`
        grid-template-columns: 1fr 1fr;
    `};
`;

export const PerilsCardContainer = styled.div`
    padding: 16px;
    ${({ theme }) => theme.media.mobile`
        padding: 8px;
    `};
`;

export const PerilsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 16px;
    cursor: pointer;
    height: 100%;
    background-color: #fff;
    &:hover {
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
    }
    ${({ theme }) => theme.media.mobile`
        flex-direction: row;
        padding: 8px;
    `};
`;

export const PerisIcon = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
    ${({ theme }) => theme.media.mobile`
        width: 40px;
        height: 40px;
        margin-bottom: 0;
        margin-right: 8px;
    `};
`;

export const PerisTitle = styled.span`
    margin-top: auto;
    ${({ theme }) => theme.media.mobile`
        margin-top: 0;
        text-align: initial;
    `};
`;
