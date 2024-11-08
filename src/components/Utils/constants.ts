export interface Transaction {
    id: number;
    name: string;
    subName: string;
    marketCap: string;
    change: string;
    graphData: Array<{ name: string; value: number }>;
    priceTrend: "up" | "down";
}

export const transactionsData: Transaction[] = [
    {
        id: 1,
        name: "Bitcoin",
        subName: "BTC/AUD",
        marketCap: "$20,356,211",
        change: "+3.23%",
        graphData: [
            { name: "Jan", value: 12 },
            { name: "Feb", value: 20 },
            { name: "Mar", value: 25 },
            { name: "Apr", value: 21 },
            { name: "May", value: 32 },
            { name: "Jun", value: 45 },
        ],
        priceTrend: "up",
    },
    {
        id: 2,
        name: "Ethereum",
        subName: "ETH/AUD",
        marketCap: "$15,216,971",
        change: "+1.15%",
        graphData: [
            { name: "Jan", value: 12 },
            { name: "Feb", value: 20 },
            { name: "Mar", value: 25 },
            { name: "Apr", value: 21 },
            { name: "May", value: 32 },
            { name: "Jun", value: 45 },
        ],
        priceTrend: "up",
    },
    {
        id: 3,
        name: "Cardano",
        subName: "ADA/AUD",
        marketCap: "$15,216,971",
        change: "-0.88%",
        graphData: [
            { name: "Jan", value: 45 },
            { name: "Feb", value: 60 },
            { name: "Mar", value: 41 },
            { name: "Apr", value: 33 },
            { name: "May", value: 22 },
            { name: "Jun", value: 11 },
        ],
        priceTrend: "down",
    },
    {
        id: 4,
        name: "EOS",
        subName: "EOS/AUD",
        marketCap: "$3,987,654",
        change: "+0.35%",
        graphData: [
            { name: "Jan", value: 12 },
            { name: "Feb", value: 20 },
            { name: "Mar", value: 25 },
            { name: "Apr", value: 21 },
            { name: "May", value: 32 },
            { name: "Jun", value: 45 },
        ],
        priceTrend: "up",
    },
];