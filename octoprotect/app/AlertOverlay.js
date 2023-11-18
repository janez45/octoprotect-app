import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AlertOverlay = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.alertText}>ALERT!</Text>
          <Text style={styles.alertMessage}>The system detected movement in Device Name</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  alertText: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
  },
  alertMessage: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AlertOverlay;
