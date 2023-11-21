import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./app/index";
import NickNamePage from "./app/NickNamePage";
import QRScanner from "./app/QRScanner";
import AlertOverlay from "./app/AlertOverlay";

export default function App() {
  return <NickNamePage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
