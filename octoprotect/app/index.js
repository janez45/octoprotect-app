import { StyleSheet, View, Text, Button } from "react-native";
import Toggle from "../elements/Toggle";
// import { Title } from "react-native-paper";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button title="Click me!" />
      <Toggle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
