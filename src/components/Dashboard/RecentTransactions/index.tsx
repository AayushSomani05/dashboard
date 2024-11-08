import { Line, LineChart, ResponsiveContainer } from "recharts";
import { Transaction } from "../../Utils/constants";
import * as Styles from "./styles";

interface IRecentTransactions {
    data: Transaction[];
}

const RecentTransactions = ({ data }: IRecentTransactions) => {
    return (
        <Styles.TableContainer>
            <h3>Recent Transactions</h3>
            {data.map((transaction) => (
                <Styles.TableRow key={transaction.id}>
                    <Styles.TableCell>
                        <Styles.FlexBox>
                            <Styles.Avatar>
                                {transaction.name.charAt(0).toUpperCase()}
                            </Styles.Avatar>
                            <div>
                                {transaction.name}
                                <br />
                                <span>{transaction.subName}</span>
                            </div>
                        </Styles.FlexBox>
                    </Styles.TableCell>
                    <Styles.TableCell>
                        <span>Market Cap</span>
                        <br />
                        {transaction.marketCap}
                    </Styles.TableCell>
                    <Styles.TableCell className={transaction.priceTrend}>
                        <span>30h Change</span>
                        <br />
                        {transaction.change}
                    </Styles.TableCell>
                    <Styles.TableCell>
                        <ResponsiveContainer width="70%" height={40}>
                            <LineChart data={transaction.graphData}>
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke={
                                        transaction.priceTrend == "up"
                                            ? "#32cd32"
                                            : "#ff6347"
                                    }
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </Styles.TableCell>
                    <Styles.TableCell>
                        <Styles.SellButton>Sell</Styles.SellButton>
                        <Styles.BuyButton>Buy</Styles.BuyButton>
                    </Styles.TableCell>
                </Styles.TableRow>
            ))}
        </Styles.TableContainer>
    );
};

export default RecentTransactions;
