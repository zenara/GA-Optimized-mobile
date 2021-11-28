/**
 * @author Chathurika Senani
 * @create date 2021-10-11 18:49:43
 * @modify date 2021-10-11 20:00:59
 */

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import appstyles from '../utils/styles';
import { getAlgorithms } from './actions';
import { colors } from '../utils';
import { VictoryScatter, VictoryTooltip, VictoryGroup, VictoryLine } from "victory-native";
import ChartContainer from '../components/chartContainer';
import TopBar from '../components/topBar';

const HomeScreen = () => {
  const [ selectedGraph, setSelectedGraph ] = useState('');
  const [ga, setGa] = useState(false);
  const [iqr, setIqr] = useState(false);
  const [lr, setLr] = useState(false);

  useEffect(() => {
		fetchData(false);
	}, []);

  const fetchData = () => {
    const payload = {
      handle: 'bestbullysticks'
    };
    getAlgorithms(payload)
    .then(res => {
      console.log('response get Algo : ', res);
    })
    .catch(ex => {
      console.log('error : ', ex);
    })
  };

  const data1 = [
    { x: 1, y: 5 },
    { x: 2, y: 9 },
    { x: 3, y: -4 },
    { x: 4, y: 0 },
    { x: 5, y: -2 },
    { x: 6, y: -2 },
    { x: 7, y: 5 }
    ];

  const data2 = [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0},
    { x: 7, y: 0 }
    ];

  const data3 = [
    { x: 1, y: 2 },
    { x: 2, y: 0 },
    { x: 3, y: 3 },
    { x: 4, y: 0 },
    { x: 5, y: 3 },
    { x: 6, y: 0},
    { x: 7, y: 2 }
    ];

  const graphs = ["Graph 1", "Graph 2", "Graph 3", "Graph 4"];

  return (
    <View style={appstyles.container}>
      <Text style={styles.text}>GA - Optimized</Text>
      <ScrollView style={styles.chartContainer}>

        <TopBar data={graphs} setSelectedGraph={setSelectedGraph} setGa={setGa} setIqr={setIqr} setLr={setLr} ga={ga} iqr={iqr} lr={lr}/>

        <ChartContainer>

          { ga ? <VictoryGroup
            color={colors.ga}
            labels={({ datum }) => `y: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 10 }}
              />
            }
            data={data1}
          >
            <VictoryLine/>
            <VictoryScatter
              size={({ active }) => active ? 8 : 3}
            />
          </VictoryGroup> : null }

          { iqr ? <VictoryGroup
            color={colors.iqr}
            labels={({ datum }) => `y: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 10 }}
              />
            }
            data={data2}
          >
            <VictoryLine/>
            <VictoryScatter
              size={({ active }) => active ? 8 : 3}
            />
          </VictoryGroup> : null }

          { lr ? <VictoryGroup
            color={colors.lr}
            labels={({ datum }) => `y: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 10 }}
              />
            }
            data={data3}
          >
            <VictoryLine/>
            <VictoryScatter
              size={({ active }) => active ? 8 : 3}
            />
          </VictoryGroup> : null }

        </ChartContainer>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 10
  },
  chartContainer: {
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white
  }
})