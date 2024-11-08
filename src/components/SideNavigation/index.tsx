import Profile from "./Profile";
import * as Styles from "./styles";

const 
Sidebar = () => {
    return (
        <Styles.SidebarContainer>
            <div>
                <Styles.Logo>
                    Cupi<span style={{ color: "#32cd32" }}>vupi.</span>
                </Styles.Logo>
                <Styles.MenuText>Menu</Styles.MenuText>
                <Styles.MenuList>
                    <Styles.MenuItem className="current">
                        Dashboard
                    </Styles.MenuItem>
                    <Styles.MenuItem>My Wallet</Styles.MenuItem>
                    <Styles.MenuItem>Transactions</Styles.MenuItem>
                    <Styles.MenuItem>Crypto</Styles.MenuItem>
                    <Styles.MenuItem>Messages</Styles.MenuItem>
                    <Styles.MenuItem>Exchange</Styles.MenuItem>
                </Styles.MenuList>
            </div>
            <Profile />
        </Styles.SidebarContainer>
    );
};

export default Sidebar;
