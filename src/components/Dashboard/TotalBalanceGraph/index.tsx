import { useState } from "react";
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";
import { GRAPH_DATA } from "./contants";
import * as Styles from "./styles";
import { GraphDataKey } from "./types";

const TotalBalanceGraph = () => {
    const [selectedTab, setSelectedTab] = useState<GraphDataKey>("portfolio");

    const handleData = (value: GraphDataKey) => {
        setSelectedTab(value);
    };

    const tabs = ["portfolio", "funding", "assets", "p2p"] as GraphDataKey[];

    return (
        <Styles.Container>
            <h5>Total Balance</h5>
            <Styles.BalanceContainer>
                <div>
                    <Styles.BalanceTitle>
                        1.82937456 <span>BTC</span>
                    </Styles.BalanceTitle>
                    <Styles.BalanceSubtext>$20,974.23</Styles.BalanceSubtext>
                </div>
                <Styles.ButtonDiv>
                    {tabs.map((tab) => (
                        <Styles.Button
                            key={tab}
                            onClick={() => handleData(tab)}
                            className={selectedTab === tab ? "primary" : ""}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Styles.Button>
                    ))}
                </Styles.ButtonDiv>
            </Styles.BalanceContainer>
            <Styles.ChartContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={GRAPH_DATA[selectedTab]}>
                        <CartesianGrid strokeDasharray="1 1" vertical={false} />
                        <XAxis dataKey="date" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="positiveValue"
                            stroke="#32CD32"
                            name="Positive Value"
                        />
                        <Line
                            type="monotone"
                            dataKey="negativeValue"
                            stroke="#ff6347"
                            name="Negative Value"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Styles.ChartContainer>
        </Styles.Container>
    );
};

export default TotalBalanceGraph;
