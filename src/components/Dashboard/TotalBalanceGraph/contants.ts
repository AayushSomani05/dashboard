import { IGraphData } from "./types";

const portfolioData = [
    { date: "3 Mar", positiveValue: 9000, negativeValue: 7000 },
    { date: "4 Mar", positiveValue: 16500, negativeValue: 6000 },
    { date: "5 Mar", positiveValue: 19000, negativeValue: 12000 },
    { date: "6 Mar", positiveValue: 12000, negativeValue: 9000 },
    { date: "7 Mar", positiveValue: 21000, negativeValue: 15000 },
    { date: "8 Mar", positiveValue: 15500, negativeValue: 7500 },
    { date: "9 Mar", positiveValue: 18000, negativeValue: 9000 },
    { date: "10 Mar", positiveValue: 25700, negativeValue: 14032 },
    { date: "11 Mar", positiveValue: 21974.23, negativeValue: 10987.12 },
];

const fundingData = [
    { date: "3 Mar", positiveValue: 2323, negativeValue: 700 },
    { date: "4 Mar", positiveValue: 4344, negativeValue: 300 },
    { date: "5 Mar", positiveValue: 4355, negativeValue: 302 },
    { date: "6 Mar", positiveValue: 1200, negativeValue: 200 },
    { date: "7 Mar", positiveValue: 8899, negativeValue: 2000 },
    { date: "8 Mar", positiveValue: 2729, negativeValue: 200 },
    { date: "9 Mar", positiveValue: 1000, negativeValue: 400 },
    { date: "10 Mar", positiveValue: 2000, negativeValue: 700 },
    { date: "11 Mar", positiveValue: 5000, negativeValue: 1300 },
];

const assetsData = [
    { date: "3 Mar", positiveValue: 1000, negativeValue: 500 },
    { date: "4 Mar", positiveValue: 2000, negativeValue: 1000 },
    { date: "5 Mar", positiveValue: 3000, negativeValue: 1500 },
    { date: "6 Mar", positiveValue: 2500, negativeValue: 1250 },
    { date: "7 Mar", positiveValue: 5000, negativeValue: 2500 },
    { date: "8 Mar", positiveValue: 10000, negativeValue: 5000 },
    { date: "9 Mar", positiveValue: 12000, negativeValue: 6000 },
    { date: "10 Mar", positiveValue: 7000, negativeValue: 3500 },
    { date: "11 Mar", positiveValue: 15000, negativeValue: 7500 },
];

const p2pData = [
    { date: "3 Mar", positiveValue: 10000, negativeValue: 7000 },
    { date: "4 Mar", positiveValue: 20000, negativeValue: 6000 },
    { date: "5 Mar", positiveValue: 40000, negativeValue: 12000 },
    { date: "6 Mar", positiveValue: 15000, negativeValue: 9000 },
    { date: "7 Mar", positiveValue: 8000, negativeValue: 5000 },
    { date: "8 Mar", positiveValue: 34000, negativeValue: 7500 },
    { date: "9 Mar", positiveValue: 23000, negativeValue: 9000 },
    { date: "10 Mar", positiveValue: 12000, negativeValue: 14032 },
    { date: "11 Mar", positiveValue: 30000, negativeValue: 10987.12 },
];

export const GRAPH_DATA: IGraphData = {
    portfolio: portfolioData,
    funding: fundingData,
    assets: assetsData,
    p2p: p2pData,
};
