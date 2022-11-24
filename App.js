import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import MessageItem from "./components/MessageItem";
import MessageInput from "./components/MessageInput";

export default function App() {
  const [isModelVisible, setModalVisibility] = useState(false);
  const [messageArr, setMessageArr] = useState([]);

  function showMessageModalHandler() {
    setModalVisibility(true);
  }

  function saveMessageHandler(enteredMessage) {
    // console.log(enteredMessage);
    setMessageArr((currentArr) => [
      ...currentArr,
      { text: enteredMessage, id: Math.random().toString() },
    ]);
    dismissModalHandler();
  }

  function deleteMessageHandler(id) {
    // console.log("deleted",i.id);
    setMessageArr((currentArr) => {
      return currentArr.filter((msg) => msg.id !== id);
    });
  }

  function dismissModalHandler(){
    setModalVisibility(false)
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Role"
        color="#5e0acc"
        onPress={showMessageModalHandler}
      />
      <MessageInput
        visible={isModelVisible}
        onMessageAdd={saveMessageHandler}
        onCancelModal={dismissModalHandler}
      />
      <View style={styles.messageContainer}>
        <Text>List Of Messages....</Text>
        <FlatList
          data={messageArr}
          renderItem={(itemData) => {
            return (
              <MessageItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteMessageHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
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

  messageContainer: {
    flex: 9,
  },
});
