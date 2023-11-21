import { Pressable, StyleSheet, Text, View } from "react-native";

const onPress = () => {
  console.log("Pressed the AddNewDevice");
};

const AddNewDeviceButton = () => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#549B0D" : "#5EBC00",
            alignItems: "center",
          },
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.text}>Add a Device</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 19,
    fontWeight: "500",
    color: "white",
  },
  wrapperCustom: {
    borderRadius: 20,
    padding: 12,
    width: 200,
    elevation: 5,
    shadowOffset: 20,
  },
});

export default AddNewDeviceButton;
