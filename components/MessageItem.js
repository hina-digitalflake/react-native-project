import { StyleSheet, Text, View, Pressable } from "react-native";

function MessageItem(props) {
  return (
          <View style={styles.messageItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.messageText}>{props.text}</Text>
      </Pressable>
    </View>

  );
}

export default MessageItem;

const styles = StyleSheet.create({
  messageItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity : 0.5
  },
  messageText: {
    padding: 8,
    color: "white",
  },
});
