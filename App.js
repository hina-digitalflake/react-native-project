import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput  style={styles.textInput} placeholder='Enter a message'/>
        <Button title='Save'/>
      </View>
      <View style = {styles.messageContainer}>
        <Text>List Of Messages....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer : {
      flex : 1,
      paddingHorizontal : 16,
      paddingTop:50
    },
    inputContainer : {
      flex : 1,
      flexDirection : "row",
      justifyContent : "space-between",
      alignItems : 'center',
      marginBottom : 20,
      borderBottomWidth : 1,  
      borderBottomColor : 'gray'
    },
    textInput : {
      borderWidth : 1,
      borderColor : "#cccccc",
      width : "80%",
      padding : 8
    },
    messageContainer : {
      flex : 9
    }
});
