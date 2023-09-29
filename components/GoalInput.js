
import { StyleSheet,  Text,TextInput, View,Button,} from 'react-native';
import { useState } from 'react'

function GoalInput(props){

    const[enteredGoalText,setEnteredGoalText] = useState(''); 

    // react handles this, therefofre, we do not have to focus on passing parameter
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        // will be received by the prop
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');

    }
    return (
        <View style={styles.inputContainer}>
        {/* in inputContainer, i have used flexDirection, 
        it arranges the component in that view in the correponding way
        for example: row -> it will place it rowwise
                  and column - it will place it columnwise  */}
            <TextInput
             style={styles.textInput} 
             placeholder='Your course goals'
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
            {/* // goalInputHandler() - evaluated when the app is evaluated
            // we want react to evaluate it, therefore, do goalInputHandler */}
            
            <Button title = "Add Goal" onPress={addGoalHandler} /> 
            {/* button attribute does not 
            have style property ,  */}

      </View>
    );
}

export default GoalInput; 

const styles = StyleSheet.create({
   
    inputContainer: {
       flex:1,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems:'center',
       paddingBottom:24,
       borderBottomWidth:1,
       borderBottomColor:'#cccccc'
    },
    goalsContainer:{
      flex: 5
    },
    textInput: {
      borderWidth:1,
      borderColor: '#cccccc',
      width: '70%',
      marginRight:8,
      padding:8
    }
  });
  