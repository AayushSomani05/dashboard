import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    border-radius: 10px;
    color: white;
    border: 1px solid grey;
    margin-top: 20px;
    h5 {
        color: grey;
        margin-bottom: 10px;
    }
`;

export const BalanceContainer = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const BalanceTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin: 0px;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
        background-color: #32cd32;
        border-radius: 16px;
        padding: 4px 8px;
        font-size: 16px;
    }
`;

export const BalanceSubtext = styled.p`
    color: grey;
    font-size: 14px;
`;

export const ButtonDiv = styled.div`
    border: 1px solid grey;
    border-radius: 16px;
    padding: 10px;
`;

export const Button = styled.button`
    padding: 4px 8px;
    margin: 0px 5px;
    background-color: unset;
    color: white;
    border-radius: 16px;
    border: none;
    cursor: pointer;

    &.primary {
        background-color: #32cd32;
    }

    &:hover {
        background-color: #333333;
    }
`;

export const ChartContainer = styled.div`
    padding: 20px;
    border-radius: 10px;
    color: white;
    height: 300px;
`;
