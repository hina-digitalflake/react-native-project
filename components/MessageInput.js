import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function MessageInput(props) {
  const [enteredMessage, setMessage] = useState("");

  function messageInputHandler(enteredText) {
    setMessage(enteredText);
  }

  function saveMessageHandler() {
    if (enteredMessage != "") {
      props.onMessageAdd(enteredMessage);
      setMessage("");
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/favicon.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter a message"
          onChangeText={messageInputHandler}
          value={enteredMessage}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancelModal}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Save" onPress={saveMessageHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default MessageInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31136b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "80%",
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  button: {
    width: "30%",
    marginHorizontal: 12,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
