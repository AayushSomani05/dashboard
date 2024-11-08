import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: white;
    border-bottom: 1px solid grey;

    button {
        border: 1px solid grey;
        background-color: unset;
        color: white;
        border-radius: 16px;
        padding: 8px 16px;
        cursor: pointer;

        &:hover {
            background-color: #333333;
        }
    }
`;

export const FlexHead = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    h3 {
        margin: 0px;
    }
`;

export const SearchInput = styled.input`
    padding: 8px;
    border-radius: 16px;
    border: 1px solid grey;
    color: white;
    width: 300px;
    background-color: unset;
`;
