import React from 'react';
import { StyleSheet } from 'react-native';
import { VictoryChart, VictoryVoronoiContainer } from "victory-native";
import { colors } from '../utils';
 
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