import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SelectDropdown from "react-native-select-dropdown";
import { RadioButton } from 'react-native-paper';
import { colors } from '../utils';
 
const TopBar = (props) => {
 
return (
    <View style={styles.topContainer}>
        <SelectDropdown
                  data={props.data}
                  onSelect={(selectedItem) => {
                    props.setSelectedGraph(selectedItem);
                  }}
                  defaultButtonText={"Select"}
                  buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item) => {
                    return item;
                  }}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  dropdownStyle={styles.dropdown1DropdownStyle}
                  rowStyle={styles.dropdown1RowStyle}
                  rowTextStyle={styles.dropdown1RowTxtStyle}
                />
        <View style={styles.secondaryContainer}>
            <View style={styles.chartLineContainer}>
                <RadioButton
                    color={colors.ga}
                    value={props.ga}
                    status={ props.ga ? 'checked' : 'unchecked' }
                    onPress={() => props.setGa(!props.ga)}
                />
                <Text style={{color: colors.ga}}>Generic Algorithm</Text>
            </View>
            <View style={styles.chartLineContainer}>
                <RadioButton
                    color={colors.iqr}
                    value={props.iqr}
                    status={ props.iqr ? 'checked' : 'unchecked' }
                    onPress={() => props.setIqr(!props.iqr)}
                />
                <Text style={{color: colors.iqr}}>Inter Quartile Range</Text>
            </View>
            <View style={styles.chartLineContainer}>
                <RadioButton
                    color={colors.lr}
                    value={props.lr}
                    status={ props.lr ? 'checked' : 'unchecked' }
                    onPress={() => props.setLr(!props.lr)}
                />
                <Text style={{color: colors.lr}}>Linear Regression</Text>
            </View>
        </View>
    </View>
    );
};
 
export default TopBar;

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        width: "40%",
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444",
    },
    dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
    dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
    dropdown1RowStyle: {
        backgroundColor: "#EFEFEF",
        borderBottomColor: "#C5C5C5",
    },
    dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
    topContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    secondaryContainer: {
        height: '100%',
        width: '50%',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    },
    chartLineContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    }
  })