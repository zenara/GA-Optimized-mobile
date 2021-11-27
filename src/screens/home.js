/**
 * @author Chathurika Senani
 * @create date 2021-10-11 18:49:43
 * @modify date 2021-10-11 20:00:59
 */

import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import appstyles from '../utils/styles';
import { getAlgorithms } from './actions';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

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
      <View style={styles.chartContainer}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="x_axis" y="y_axis" />
        </VictoryChart>
      </View>
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
    padding: 20,
    alignItems: 'center'
  }
})