import { useState } from "react";
import BitcoinGraph from "../Dashboard/BitcoinGraph";
import PortfolioSummary from "../Dashboard/PortfolioSummary";
import ROIChart from "../Dashboard/ROIChart";
import RecentTransactions from "../Dashboard/RecentTransactions";
import TotalBalanceGraph from "../Dashboard/TotalBalanceGraph";
import Header from "../Headers";
import Sidebar from "../SideNavigation";
import { transactionsData } from "../Utils/constants";
import * as Styles from "./styles";

const Router = () => {
    const [search, setSearch] = useState<string>("");

    const filteredData = transactionsData.filter(
        (transaction) =>
            transaction.name.toLowerCase().indexOf(search.toLowerCase()) !==
                -1 ||
            transaction.subName.toLowerCase().indexOf(search.toLowerCase()) !==
                -1
    );
    return (
        <Styles.CustomRoute>
            <Sidebar />
            <Styles.MainContent>
                <Header search={search} setSearch={setSearch} />
                <Styles.ContentWrapper>
                    <div className="left">
                        <TotalBalanceGraph />
                        <RecentTransactions data={filteredData} />
                    </div>
                    <div className="right">
                        <BitcoinGraph />
                        <ROIChart />
                        <PortfolioSummary />
                    </div>
                </Styles.ContentWrapper>
            </Styles.MainContent>
        </Styles.CustomRoute>
    );
};

export default Router;
