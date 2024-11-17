
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

const BarData = ({ bar }) => {

    const chartData = bar;

    const chartConfig = {
        day: {
            label: "Day",
            color: "hsl(var(--chart-1))",
        },
        night: {
            label: "Night",
            color: "hsl(var(--chart-2))",
        },
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Blood Pressure Gauge (Day/Night)</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="day" fill="var(--color-day)" radius={4} />
                        <Bar dataKey="night" fill="var(--color-night)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
            </CardFooter>
        </Card>
    )
}

export default BarData
