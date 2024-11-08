import { FaBell, FaUserCircle } from "react-icons/fa";
import * as Styles from "./styles";

interface IHeader {
    search: string;
    setSearch(search: string): void;
}

const Header = ({ search, setSearch }: IHeader) => {
    return (
        <Styles.HeaderContainer>
            <Styles.FlexHead>
                <h3>Dashboard</h3>
                <Styles.SearchInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search anything in cupivupi..."
                />
            </Styles.FlexHead>
            <div>
                <FaBell style={{ marginRight: "15px", cursor: "pointer" }} />
                <FaUserCircle
                    style={{ marginRight: "15px", cursor: "pointer" }}
                />
                <button>Add new coin</button>
            </div>
        </Styles.HeaderContainer>
    );
};

export default Header;
