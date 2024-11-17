
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const LineChart = ({ line }) => {
    const chartData = line

    const chartConfig = {
        calories: {
            label: "calories per Month",
            color: "hsl(var(--chart-1))",
        },
    }
    return (
        <Card className='h-[350px] lg:w-1/2'>
            <CardHeader>
                <CardTitle>Calories Burnt History</CardTitle>
                <CardDescription>
                    Calories history for the last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent className="h-full">
                <ChartContainer className="h-[250px] w-full" config={chartConfig}>
                    <AreaChart
                    width={undefined} // Let the parent control the width
                    height={undefined}
                    className="h-full w-full"
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="calories"
                            type="natural"
                            fill="var(--color-calories)"
                            fillOpacity={0.4}
                            stroke="var(--color-calories)"
                        />
                        
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            
        </Card>
    )
}

export default LineChart
