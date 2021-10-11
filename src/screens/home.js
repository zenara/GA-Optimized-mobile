/**
 * @author Chathurika Senani
 * @create date 2021-10-11 18:49:43
 * @modify date 2021-10-11 20:00:59
 */

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import appstyles from '../utils/styles';
import { getAlgorithms } from './actions';

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

  return (
    <View style={appstyles.container}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;