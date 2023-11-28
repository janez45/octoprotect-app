import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { pairAction } from "../service/websocket";

const NickNamePage = ({ navigation, deviceData }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const nickNameData = {
    nickName: name,
  };
  const onSubmit = () => {
    console.log(nickNameData);
    console.log(nickNameData.nickName);
    if (nickNameData.nickName) {
      deviceData.nickName = nickNameData.nickName;
      dispatch(pairAction(deviceData));
      console.log(deviceData);
      alert(`Pair request sent`);
      //useeffect
      navigation.navigate("Devices");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Step 2:</Text>
      <Text style={styles.header2}>
        Give your device a nickname to help you identify it more easily:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a nickname"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Save" onPress={() => onSubmit()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  header1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header2: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    width: "100%",
    fontSize: 18,
  },
});

export default NickNamePage;
