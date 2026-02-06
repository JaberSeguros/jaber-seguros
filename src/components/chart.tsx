"use client";
import { Bar, BarChart } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "Janeiro", desktop: 186, mobile: 80 },
  { month: "Fevereiro", desktop: 305, mobile: 200 },
];
const chartConfig = {
  desktop: {
    label: "Jaber Seguros",
    color: "#2563eb",
  },
  mobile: {
    label: "Outras Corretoras",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
export function ChartExample() {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[80px] w-full max-w-[120px]"
    >
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
