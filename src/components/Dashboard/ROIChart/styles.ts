import styled from "styled-components";

export const ROICard = styled.div`
    border-radius: 16px;
    padding: 10px;
    margin: 20px 0px;
    color: white;
    border: 1px solid grey;
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ChartValue = styled.h3`
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    padding: 0;

    span {
        color: grey;
        font-size: 12px;
    }
`;

export const ChartTitle = styled.div`
    color: grey;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: end;
    span {
        display: flex;
        justify-content: end;
        background-color: #32cd32;
        width: fit-content;
        border-radius: 16px;
        padding: 4px 8px;
        margin: 4px;
        color: white;
    }
`;
