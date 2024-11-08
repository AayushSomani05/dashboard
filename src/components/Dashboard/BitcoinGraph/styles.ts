import styled from "styled-components";

export const CryptoCard = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CryptoContainer = styled.div`
    color: white;
    border-radius: 10px;
    border: 1px solid grey;
    padding: 0px 20px 20px;
    margin-top: 20px;
`;

export const CryptoTitle = styled.h3`
    font-size: 14px;
    font-weight: bold;
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 0px;
    span {
        font-size: 10px;
        color: #888;
    }
`;

export const CryptoPrice = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0px;

    span {
        font-size: 12px;
        color: #32cd32;
    }
`;

export const TrendContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
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
