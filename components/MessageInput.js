import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function MessageInput(props) {
  const [enteredMessage, setMessage] = useState("");
  function messageInputHandler(enteredText) {
    setMessage(enteredText);
  }
  function saveMessageHandler() {
   if(enteredMessage != ""){
    props.onMessageAdd(enteredMessage);
    setMessage("");
   }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a message"
        onChangeText={messageInputHandler}
        value = {enteredMessage}
      />
      <Button title="Save" onPress={saveMessageHandler} />
    </View>
  );
}

export default MessageInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 8,
  },
});
