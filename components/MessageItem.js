import { StyleSheet, Text, View } from "react-native";

function MessageItem (props) {
  return (
    <View style={styles.messageItem}>
      <Text style={styles.messageText}>{props.text}</Text>
    </View>
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