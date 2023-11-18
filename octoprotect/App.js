import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./app/index";
import NickNamePage from "./app/NickNamePage";
import QRScanner from "./app/QRScanner";

export default function App() {
  return <QRScanner />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
