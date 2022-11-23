import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput  style={styles.textInput} placeholder='Enter a message'/>
        <Button title='Save'/>
      </View>
      <View style = {{paddingTop : 20}}>
        <Text>List Of Messages....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer : {
      padding : 16,
      paddingTop:100
    },
    inputContainer : {
      flexDirection : "row",
      justifyContent : "space-between"
      
    },
    textInput : {
      borderWidth : 1,
      borderColor : "#cccccc",
      width : "80%"
    }
});
