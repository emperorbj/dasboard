
import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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

const PieData = ({pie}) => {
    //const chartData = pie
    const chartData = pie


    
const chartConfig = {
    amount: {
      label: "Amounts",
    },
    carbs: {
      label: "Carbs",
      color: "hsl(var(--chart-1))",
    },
    fats: {
      label: "Fats",
      color: "hsl(var(--chart-2))",
    },
    proteins: {
      label: "Proteins",
      color: "hsl(var(--chart-3))",
    },
    minerals: {
      label: "Minerals",
      color: "hsl(var(--chart-4))",
    },
    fruits: {
      label: "Fruits",
      color: "hsl(var(--chart-5))",
    },
  } 
  return (
    <Card className="h-[350px] lg:w-1/2 flex flex-col">
    <CardHeader className="items-center pb-0">
      <CardTitle>Food Class Chart</CardTitle>
      <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent className="flex-1 pb-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie data={chartData} dataKey="amount" nameKey="foods" />
        </PieChart>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col gap-2 text-sm">
      <div className="leading-none font-bold text-muted-foreground">
        Total estimate food class intake for the last 6 months (Calories)
      </div>
    </CardFooter>
  </Card>
  )
}

export default PieData
