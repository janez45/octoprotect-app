import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Chip, Divider, Icon, Surface, Switch, Text, Appbar, ProgressBar, MD3Colors } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { armAction, disarmAction, requestStateAction, startStreamAction, stopStreamAction, updateConfigAction } from "../service/websocket";
import { BlinkText } from "../components/BlinkText";
import Slider from "@react-native-community/slider";

const deviceSelector = state => state.device.device
const accelerationSelector = state => state.device.acceleration
const nexusStateSelector = state => state.device.nexusState
const ConfigDevicePage = ({ navigation }) => {
  const device = useSelector(deviceSelector)
  const nexusState = useSelector(nexusStateSelector)
  const acceleration = useSelector(accelerationSelector)
  const [sensitivity, setSensitivity] = useState(0)
  useEffect(() => {
    setSensitivity(device.config.sensitivity)
  }, [device.config.sensitivity])
  useEffect(() => {
    dispatch(startStreamAction({nexusID: device.id}))
    return () => {
      dispatch(stopStreamAction({nexusID: device.id}))
    }
  }, [])
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <View style={styles.deviceNameContainer}>
      <Text style={styles.deviceName}>{device.nickName}</Text>
      <Chip>{device.online ? 'Connected' : 'Disconnected'}</Chip>
      </View>
      <Text style={styles.extraInfo}>MAC: {device.macAddress}</Text>
      {nexusState && <Surface mode="flat" style={styles.armedStatusContainer}>
        <View style={styles.flexRow}>
          <Text>Sensitivity: {sensitivity.toFixed(2)}</Text>
          <Slider style={{flexGrow: 1}} minimumValue={0.2} maximumValue={3} value={sensitivity} onValueChange={setSensitivity}/>
        </View>
        <View style={styles.flexRow}>
          <Button icon="restart">Reset</Button>
          <Button icon="check">Apply</Button>
        </View>
      </Surface>}
      <Divider />
      <Text variant="titleLarge">Titans</Text>
      {nexusState && nexusState.titan.map(titan => <Surface mode="flat" style={styles.titanContainer} key={titan.id}>
        <View style={styles.flexRow}><Icon source={titan.isWorking ? "check" : "close"}/><Text variant="bodyLarge">{titan.name}</Text></View>
        <Text variant="labelSmall">ID: {titan.id}</Text>
        {acceleration[titan.id] !== undefined && <View>
          <Text variant="bodySmall">Acceleration: {acceleration[titan.id].toFixed(2)}</Text>
          <ProgressBar progress={acceleration[titan.id]/2} color={acceleration[titan.id] >= sensitivity ? MD3Colors.error50 : MD3Colors.primary50} />
          {/* <ProgressBar progress={0.5} /> */}
        </View>}
        
      </Surface>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    // backgroundColor: 'lightblue',
    width: '100%',
    display: "flex",
    gap: 8
  },
  deviceNameContainer: {
    display: "flex",
    flexDirection: "row",
  },
  deviceName: {
    fontSize: 24,
    fontWeight: "bold",
    flexGrow: 1
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
  armedStatusContainer: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 16
  },
  titanContainer: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    borderRadius: 16
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  squareButton: {
    borderRadius: 8,
  },
  squareButtonText: {
    marginHorizontal: 12,
    marginVertical: 5,
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

export default ConfigDevicePage;
