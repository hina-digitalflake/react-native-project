import { StyleSheet, Text, View, Pressable } from "react-native";

function MessageItem (props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
       <View style={styles.messageItem}>
      <Text style={styles.messageText}>{props.text}</Text>
    </View>
    </Pressable>
  );
}

export default MessageItem;

const styles = StyleSheet.create({
  messageItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  messageText: {
    color: "white",
  },
});