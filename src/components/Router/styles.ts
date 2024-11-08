import styled from "styled-components";

export const CustomRoute = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
`;

export const MainContent = styled.div`
    flex: 1;
    background-color: #1a1a1a;
    color: white;
    margin-left: 320px;
`;

export const ContentWrapper = styled.div`
    padding: 0px 20px;
    display: flex;
    gap: 20px;
    div {
        &.left {
            width: 70%;
            padding-right: 20px;
            border-right: 1px solid grey;
        }

        &.right {
            width: 30%;
        }
    }
`;
