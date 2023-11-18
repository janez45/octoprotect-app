import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const QRScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return (
      <Text>
        Octoprotect would like to access your camera to scan the QR code
      </Text>
    );
  }
  if (hasPermission === false) {
    return <Text>No camera access</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Step 1:</Text>
      <Text style={styles.header2}>Scan the QR code of your device </Text>
      <View style={styles.scannerBox}>
        <BarCodeScanner
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />

        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => {
              setScanned(false);
            }}
          />
        )}
      </View>
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
  scannerBox: {
    justifyContent: "center",
    alignContent: "center",
    width: 310,
    height: 310,
  },
});

export default QRScanner;
