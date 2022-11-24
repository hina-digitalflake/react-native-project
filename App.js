import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import MessageItem from "./components/MessageItem";

export default function App() {
  const [enteredMessage, setMessage] = useState("");
  const [messageArr, setMessageArr] = useState([]);

  function messageInputHandler(enteredText) {
    setMessage(enteredText);
  }

  function saveMessageHandler() {
    // console.log(enteredMessage);
    setMessageArr((currentArr) => [
      ...currentArr,
      { text: enteredMessage, id: Math.random().toString() },
    ]);
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
        <FlatList
          data={messageArr}
          renderItem={(itemData) => {

            return (
             <MessageItem text={itemData.item.text}/>
            );
          }}
          keyExtractor={(item,index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />
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
  
});
