import styled from "styled-components";

export const PortfolioContainer = styled.div`
    border-radius: 16px;
    padding: 20px 10px;
    color: white;
    border: 1px solid grey;
    h3 {
        margin: 0;
        padding: 0;
    }
`;

export const PortfolioItem = styled.div`
    display: flex;
    align-items: center;
`;

export const PortfolioIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #444;
    border-radius: 50%;
    margin-right: 15px;
`;

export const PortfolioName = styled.p`
    font-size: 16px;
    font-weight: bold;
    flex: 1;
    span {
        color: grey;
        font-size: 12px;
    }
`;

export const PortfolioChange = styled.p`
    display: flex;
    flex-direction: column;
    align-items: end;
    font-size: 16px;
    gap: 4px;
    &.positive {
        color: #32cd32;
    }
    &.negative {
        color: #ff6347;
    }
    span {
        font-size: 12px;
        color: #888;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    svg {
        cursor: pointer;
    }
`;
