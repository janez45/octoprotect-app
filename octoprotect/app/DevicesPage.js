import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { devices_database } from "../databases/devices_data";
import Toggle from "../elements/Toggle";
import DeviceSpecificPage from "./DeviceSpecificPage";

const DevicesPage = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleClick = (data) => {
    setShowComponent(true);
    setSelectedDevice(data);
  };

  return (
    <View>
      <Text style={styles.title}>Devices</Text>
      {devices_database.map((data, key) => {
        return (
          <View style={styles.deviceContainer} key={key} id={data.nexus_id}>
            <TouchableOpacity onPress={() => handleClick(data)}>
              {<DeviceSpecificPage deviceData={selectedDevice} />}

              <Text style={styles.header2}>{data.nexus_nickname}</Text>
              <View sylte={styles.toggleStyles}>
                <Toggle></Toggle>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    color: "black",
  },
  header2: {
    fontSize: 20,
    marginBottom: 20,
  },
  deviceContainer: {
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: "90%",
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#DDEFE5",
    // shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.9,
    // shadowRadius: 3,
  },
  toggleStyles: {
    marginTop: "30%",
    width: "50%",
    paddingTop: "-20%",
  },
});

export default DevicesPage;
