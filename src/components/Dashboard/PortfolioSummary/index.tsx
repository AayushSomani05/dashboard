import { FaPlusCircle } from "react-icons/fa";
import {
	FlexBox,
	PortfolioChange,
	PortfolioContainer,
	PortfolioIcon,
	PortfolioItem,
	PortfolioName,
} from "./styles";

interface PortfolioItemProps {
    id: number;
    name: string;
    type: string;
    amount: string;
    change: string;
    changeType: "positive" | "negative";
}

const portfolioData: PortfolioItemProps[] = [
    {
        id: 1,
        name: "Bitcoin",
        type: "Buy",
        amount: "-$5,642",
        change: "Today, 15:20 PM",
        changeType: "negative",
    },
    {
        id: 2,
        name: "Ethereum",
        type: "Received",
        amount: "+0.245 ETH",
        change: "Today, 10:20 AM",
        changeType: "positive",
    },
    {
        id: 3,
        name: "Polkadot",
        type: "Buy",
        amount: "-$3,100",
        change: "Yesterday, 9:00 PM",
        changeType: "negative",
    },
    {
        id: 4,
        name: "EOS",
        type: "Buy",
        amount: "-1.235 EOS",
        change: "Yesterday, 17:20 PM",
        changeType: "negative",
    },
    {
        id: 5,
        name: "Cardano",
        type: "Received",
        amount: "+$36.21",
        change: "Yesterday, 17:20 PM",
        changeType: "positive",
    },
];

const PortfolioSummary = () => {
    return (
        <PortfolioContainer>
            <FlexBox>
                <h3>Your Portfolio</h3>
                <FaPlusCircle />
            </FlexBox>
            {portfolioData.map((item) => (
                <PortfolioItem key={item.id}>
                    <PortfolioIcon>{item.name.charAt(0)}</PortfolioIcon>
                    <PortfolioName>
                        {item.name}
                        <br />
                        <span>{item.type}</span>
                    </PortfolioName>
                    <PortfolioChange className={item.changeType}>
                        {item.amount} <br />
                        <span>{item.change}</span>
                    </PortfolioChange>
                </PortfolioItem>
            ))}
        </PortfolioContainer>
    );
};

export default PortfolioSummary;
