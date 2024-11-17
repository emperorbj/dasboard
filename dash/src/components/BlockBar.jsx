import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const BlockBar = ({ block }) => {
    const chartData = block;


    const chartConfig = {
        value: {
            label: "Value",
        },
        Mondays: {
            label: "Mon",
            color: "hsl(var(--chart-1))",
        },
        Tuesdays: {
            label: "Tues",
            color: "hsl(var(--chart-2))",
        },
        Wednesdays: {
            label: "Wed",
            color: "hsl(var(--chart-3))",
        },
        Thursdays: {
            label: "Thurs",
            color: "hsl(var(--chart-4))",
        },
        Fridays: {
            label: "Fri",
            color: "hsl(var(--chart-5))",
        },
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Productivity Chart</CardTitle>
                
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: 0,
                        }}
                    >
                        <YAxis
                            dataKey="days"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) =>
                                chartConfig[value]?.label
                            }
                        />
                        <XAxis dataKey="value" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="value" layout="vertical" radius={5} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default BlockBar
