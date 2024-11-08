import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import * as Styles from "./styles";

const trendData = [
    { name: "Jan", value: 12 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 22 },
    { name: "Apr", value: 51 },
    { name: "May", value: 33 },
    { name: "Jun", value: 72 },
];

const BitcoinGraph = () => {
    return (
        <Styles.CryptoContainer>
            <Styles.CryptoTitle>
                <Styles.Avatar>B</Styles.Avatar>
                <div>
                    Bitcoin
                    <br />
                    <span>BTC</span>
                </div>
            </Styles.CryptoTitle>
            <Styles.CryptoCard>
                <Styles.CryptoPrice>
                    $52,291
                    <br />
                    <span>+0.25%</span>
                </Styles.CryptoPrice>

                <Styles.TrendContainer>
                    <ResponsiveContainer width="70%" height={40}>
                        <LineChart data={trendData}>
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#32cd32"
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Styles.TrendContainer>
            </Styles.CryptoCard>
        </Styles.CryptoContainer>
    );
};

export default BitcoinGraph;
