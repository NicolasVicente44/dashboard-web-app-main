import React from "react";
import { Card, Title, Text, ScatterChart } from "@tremor/react";

const chartdata = [
  {
    Country: "Argentina",
    Life_expectancy: 76.3,
    GDP: 13467.1236,
    Population: 43417765,
  },
  {
    Country: "Australia",
    Life_expectancy: 82.8,
    GDP: 56554.3876,
    Population: 23789338,
  },
  {
    Country: "Austria",
    Life_expectancy: 81.5,
    GDP: 43665.947,
    Population: 8633169,
  },
  {
    Country: "Brazil",
    Life_expectancy: 73.2,
    GDP: 22667.4332,
    Population: 213993437,
  },
  {
    Country: "Canada",
    Life_expectancy: 82.2,
    GDP: 51143.2205,
    Population: 37589262,
  },
  {
    Country: "China",
    Life_expectancy: 76.9,
    GDP: 1677.3053,
    Population: 1444216107,
  },
  {
    Country: "France",
    Life_expectancy: 82.3,
    GDP: 41463.921,
    Population: 67348151,
  },
  {
    Country: "Germany",
    Life_expectancy: 81.1,
    GDP: 52550.6367,
    Population: 83149300,
  },
  {
    Country: "India",
    Life_expectancy: 69.4,
    GDP: 2307.3641,
    Population: 1393409038,
  },
  {
    Country: "Italy",
    Life_expectancy: 83.4,
    GDP: 34483.9578,
    Population: 60446035,
  },
  {
    Country: "Japan",
    Life_expectancy: 84.6,
    GDP: 40259.2916,
    Population: 1265734810,
  },
  // ... add more entries
];

const ScatterComponent = () => {
  return (
    <Card className="mt-4">
      <Title>Life expectancy vs. GDP per capita</Title>
      <Text>As of 2015. Source: Our World in Data </Text>
      <ScatterChart
        className="h-80 mt-6 -ml-2"
        yAxisWidth={50}
        data={chartdata}
        category="Country"
        x="GDP"
        y="Life_expectancy"
        size="Population"
        showOpacity={true}
        minYValue={60}
        valueFormatter={{
          x: (amount) => `$${(amount / 1000).toFixed(1)}K`,
          y: (lifeExp) => `${lifeExp} yrs`,
          size: (population) => `${(population / 1000000).toFixed(1)}M people`,
        }}
        showLegend={false}
      />
    </Card>
  );
};

export default ScatterComponent;
