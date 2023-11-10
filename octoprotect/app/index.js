import { StyleSheet, View, Text, Button } from "react-native";
// import { Title } from "react-native-paper";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button title="Click me!" />
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
