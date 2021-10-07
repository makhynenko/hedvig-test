import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 72px;
    background-color: #121212;
    align-items: center;
    padding: 16px;
`;

export const Separator = styled.div`
    border-left: 1px solid rgba(255, 255, 255, 0.7);
    margin: 0 4px;
`;

export const LocaleContainer = styled.div`
    margin-left: auto;
    color: #fff;
    display: flex;
    font-size: 18px;
    &:hover ${Separator} {
        border-left: 1px solid rgba(255, 255, 255, 1);
    }
`;

export const LocaleButton = styled.div<{ selected: boolean }>`
    margin-left: auto;
    opacity: ${(p) => (p.selected ? 1 : 0.7)};

    &:hover {
        opacity: 1;
    }
`;
