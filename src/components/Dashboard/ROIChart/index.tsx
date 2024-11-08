import {
    Bar,
    BarChart,
    Cell,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis
} from "recharts";
import * as Styles from "./styles";
const roiData = [
    { name: "Jan", roi: 22 },
    { name: "Feb", roi: 10 },
    { name: "Mar", roi: 35 },
    { name: "Apr", roi: 21 },
    { name: "May", roi: 5 },
    { name: "Jun", roi: 31 },
];

const ROIChart = () => {
    const averageROI =
        roiData.reduce((sum, entry) => sum + entry.roi, 0) / roiData.length;

    return (
        <Styles.ROICard>
            <Styles.FlexBox>
                <Styles.ChartValue>
                    $1029.37
                    <br />
                    <span>OCT 2023 - FEB 2024</span>
                </Styles.ChartValue>
                <Styles.ChartTitle>
                    Return on Investment
                    <span>Last 6M</span>
                </Styles.ChartTitle>
            </Styles.FlexBox>
            <ResponsiveContainer width="100%" height={160}>
                <BarChart data={roiData}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="roi" radius={[20, 20, 0, 0]} barSize={20}>
                        {roiData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={
                                    entry.roi >= averageROI ? "#32cd32" : "grey"
                                }
                            />
                        ))}
                    </Bar>
                    <ReferenceLine
                        y={averageROI}
                        stroke="white"
                        position="start"
                        label={{
                            position: "top",
                            value: `Avg ${averageROI.toFixed(2)}%`,
                            fill: "white",
                            style: { fontWeight: "700", fontSize: 19 },
                        }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Styles.ROICard>
    );
};

export default ROIChart;
