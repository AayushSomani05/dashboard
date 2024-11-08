import styled from "styled-components";

export const TableContainer = styled.table`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    color: white;

    h3 {
        margin-bottom: 0;
    }
`;

export const TableHeader = styled.thead`
    background-color: #333;
    text-align: left;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
    padding: 15px 15px 15px 0px;
    font-size: 14px;
    border-bottom: 1px solid #444;

    &.up {
        color: #32cd32;
    }

    &.down {
        color: #ff6347;
    }
    span {
        color: grey;
        margin-top: 4px;
    }
`;

export const BuyButton = styled.button`
    padding: 8px 15px;
    background-color: white;
    color: #32cd32;
    border-radius: 16px;
    border: 1px solid white;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const SellButton = styled.button`
    padding: 8px 15px;
    background-color: unset;
    color: white;
    border-radius: 16px;
    border: 1px solid grey;
    cursor: pointer;
    margin-right: 8px;

    &:hover {
        background-color: #333333;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50% 50%;
    color: black;
`;
