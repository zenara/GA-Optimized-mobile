/**
 * @author Chathurika Senani
 * @create date 2021-10-11 18:49:43
 * @modify date 2021-10-11 20:00:59
 */

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import appstyles from '../utils/styles';
import { getAlgorithms } from './actions';
import { colors } from '../utils';
import { VictoryScatter, VictoryTooltip, VictoryGroup, VictoryLine } from "victory-native";
import ChartContainer from '../components/chartContainer';


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

  return (
    <View style={appstyles.container}>
      <Text style={styles.text}>GA - Optimized</Text>
      <ScrollView style={styles.chartContainer}>
        <ChartContainer>

          <VictoryGroup
            color="red"
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
          </VictoryGroup>

          <VictoryGroup
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
          </VictoryGroup>

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
    marginHorizontal: 10,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white
  }
})