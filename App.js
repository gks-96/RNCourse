import {useState } from 'react';
import { StyleSheet, Text,TextInput, View,Button } from 'react-native';
// button is self enclosing tag 

export default function App() {

  const[enteredGaolText,setEnteredGoalText] = useState(''); 

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler(){
    console.log(enteredGaolText);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        {/* in inputContainer, i have used flexDirection, 
        it arranges the component in that view in the correponding way
        for example: row -> it will place it rowwise
                  and column - it will place it columnwise  */}
            <TextInput style={styles.textInput} placeholder='Your  course goals'
            onChangeText={goalInputHandler}/>
            {/* // goalInputHandler() - evaluated when the app is evaluated
            // we want react to evaluate it, therefore, do goalInputHandler */}
            
            <Button title = "Add Goal" onPress={addGoalHandler} /> 
            {/* button attribute does not 
            have style property ,  */}

      </View>
      <View style = {styles.goalsContainer}>
        <Text > List of Goals... </Text>
      </View>
    </View>
   
   
  );
}
// styling 
const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    padding:50,
    paddingHorizontal:16
  },
  inputContainer: {
     flex:1,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems:'center',
     paddingBottom:24,
     borderBottomWidth:1,
     borderBottomColor:'#cccccc'
  },
  textInput: {
    borderWidth:1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight:8,
    padding:8
  },
  goalsContainer:{
    flex: 5
  }
});
