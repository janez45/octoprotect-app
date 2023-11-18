import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import { devices_database } from "../databases/devices_data";
import Toggle from "../elements/Toggle";

const DeviceSpecificPage = ( {deviceData} ) => {


  return (
    <View sylte={styles.container}>
      <Text style={styles.header1}>Titan Controller Center</Text>
      <Text style={styles.header2}>{deviceData.nexus_nickname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    backgroundColor: 'white',
    width: '100%'
    },
    header2: {
        fontSize: 20,
        marginBottom: 20,
    },
    header1: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        paddingTop: 60,
        paddingLeft: 40,
    },
  deviceContainer: {
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: '90%',
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#DDEFE5',
    // shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.9,
    // shadowRadius: 3,
  },
  toggleStyles: {
    marginTop: '30%',
    width: '50%',
    paddingTop: '-20%',
  },
});

export default DeviceSpecificPage;
