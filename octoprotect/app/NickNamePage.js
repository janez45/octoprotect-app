import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";

//may require a props that passes down the ID of the device
const NickNamePage = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can perform further actions with the form data, like sending it to a server
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Step 2:</Text>
      <Text style={styles.header2}>
        Give your device a nickname to help you identify it more easily:
      </Text>
      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Enter your data"
            // Add other TextInput props as needed
          />
        )}
      />
      <Button title="Save" onPress={handleSubmit(onSubmit)} />
      {/* We can use pressable if this button doesn't look right */}
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
