/**
 * @author Chathurika Senani
 * @create date 2021-10-11 18:49:43
 * @modify date 2021-10-11 20:00:59
 */

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import appstyles from '../utils/styles';
import { getAlgorithms } from './actions';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryVoronoiContainer, VictoryScatter, VictoryTooltip, VictoryGroup, VictoryLine } from "victory-native";
import { colors } from '../utils';

const HomeScreen = () => {

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

  const data = [
    { x_axis: 1, y_axis: 13000 },
    { x_axis: 2, y_axis: 16500 },
    { x_axis: 3, y_axis: 14250 },
    { x_axis: 4, y_axis: 19000 }
  ];

  return (
    <View style={appstyles.container}>
      <Text style={styles.text}>AlgoApp Home</Text>
      <ScrollView style={styles.chartContainer}>
        <VictoryChart domain={{ y: [0, 6] }}
          containerComponent={
            <VictoryVoronoiContainer
              labels={() => "Long, verbose labels"}
              labelComponent={
                <VictoryTooltip  dy={-7} constrainToVisibleArea />
              }
            />
          }
        >
          <VictoryScatter
            style={{ data: { fill: "red" }, labels: { fill: "red" } }}
            data={[
              { x: 0, y: 2 }, { x: 2, y: 3 }, { x: 4, y: 4 }, { x: 6, y: 5 }
            ]}
          />
          <VictoryScatter
            data={[
              { x: 2, y: 2 }, { x: 4, y: 3 }, { x: 6, y: 4 }, { x: 8, y: 5 }
            ]}
          />
        </VictoryChart>
        <VictoryChart height={400} width={400}
            containerComponent={<VictoryVoronoiContainer/>}
          >
              <VictoryGroup
                color="#c43a31"
                labels={({ datum }) => `y: ${datum.y}`}
                labelComponent={
                  <VictoryTooltip
                    style={{ fontSize: 10 }}
                  />
                }
                data={[
                  { x: 1, y: -3 },
                  { x: 2, y: 5 },
                  { x: 3, y: 3 },
                  { x: 4, y: 0 },
                  { x: 5, y: -2 },
                  { x: 6, y: -2 },
                  { x: 7, y: 5 }
                ]}
              >
                <VictoryLine/>
                <VictoryScatter
                  size={({ active }) => active ? 8 : 3}
                />
              </VictoryGroup>
              <VictoryGroup
                labels={({ datum }) => `y: ${datum.y}`}
                labelComponent={
                  <VictoryTooltip
                    style={{ fontSize: 10 }}
                  />
                }
                data={[
                  { x: 1, y: 3 },
                  { x: 2, y: 1 },
                  { x: 3, y: 2 },
                  { x: 4, y: -2 },
                  { x: 5, y: -1 },
                  { x: 6, y: 2 },
                  { x: 7, y: 3 }
                ]}
              >
                <VictoryLine/>
                <VictoryScatter
                  size={({ active }) => active ? 8 : 3}
                />
              </VictoryGroup>
          </VictoryChart>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="x_axis" y="y_axis" />
        </VictoryChart>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center'
  },
  chartContainer: {
    marginHorizontal: 10,
    marginTop: 20,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white
  }
})