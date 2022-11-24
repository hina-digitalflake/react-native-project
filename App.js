import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";

export default function App() {
  const [enteredMessage, setMessage] = useState("");
  const [messageArr, setMessageArr] = useState([]);

  function messageInputHandler(enteredText) {
    setMessage(enteredText);
  }

  function saveMessageHandler() {
    // console.log(enteredMessage);
    setMessageArr((currentArr) => [...currentArr, enteredMessage]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a message"
          onChangeText={messageInputHandler}
        />
        <Button title="Save" onPress={saveMessageHandler} />
      </View>
      <View style={styles.messageContainer}>
        <Text>List Of Messages....</Text>
        <ScrollView alwaysBounceVertical={false}>
        {messageArr.map((msg) => (          
        <View style={styles.messageItem} key={msg}>
            <Text style={styles.messageText}>{msg}</Text>
          </View>
        ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
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
  messageContainer: {
    flex: 9,
  },
  messageItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  messageText : {
    color: "white",
  }
});
