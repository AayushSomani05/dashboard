import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 320px;
    background-color: #1a1a1a;
    color: white;
    position: fixed;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;
    padding: 0px 25px 0px 12px;
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: white;
    padding: 20px;
`;

export const MenuText = styled.div`
    color: white;
    padding-left: 10px;
    margin-top: 20px;
    font-weight: 600;
`;

export const MenuList = styled.ul`
    flex: 1;
    list-style: none;
    padding: 0;
`;

export const MenuItem = styled.li`
    padding: 15px 20px;
    cursor: pointer;
    margin-bottom: 8px;
    &:hover {
        background-color: #333333;
        border-radius: 32px;
    }

    &.current {
        background: white;
        color: black;
        border-radius: 32px;
        font-weight: 700;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 20px 0px;
    border-top: 1px solid grey;

    span {
        color: grey;
    }
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50% 50%;
    color: black;
`;
