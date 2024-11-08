export type GraphDataKey = "portfolio" | "funding" | "assets" | "p2p";

export type IGraphData = Record<
    GraphDataKey,
    { date: string; positiveValue: number; negativeValue: number }[]
>;
