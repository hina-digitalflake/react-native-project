import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

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
        <TextInput
          style={styles.textInput}
          placeholder="Enter a message"
          onChangeText={messageInputHandler}
          value={enteredMessage}
        />
       <View style = {styles.buttonContainer}>
        <View style={styles.button} >
        <Button title="Save" onPress={saveMessageHandler} />
        </View>
        <View style={styles.button} >
        <Button title="Cancel" onPress={props.onCancelModal} />
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
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  buttonContainer: {
    flexDirection : "row",
    marginTop : 12
  },
  button : {
    width : "30%",
    marginHorizontal : 12
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 8,
  },
});
