import React from 'react';
import { VictoryChart, VictoryVoronoiContainer } from "victory-native";
 
const ChartContainer = (props) => {
 
return (
    <VictoryChart height={400} width={350}
        containerComponent={<VictoryVoronoiContainer/>}
    >
        {props.children}
    </VictoryChart>
    );
};
 
export default ChartContainer;