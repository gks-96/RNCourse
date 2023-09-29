import {useState } from 'react';
import { StyleSheet, Text,TextInput, View,Button,ScrollView,FlatList } from 'react-native';
// button is self enclosing tag 
import GoalItem from './components/GoalItem';
// custom component - good practice to start with capital 
export default function App() {

  const[enteredGoalText,setEnteredGoalText] = useState(''); 

  const[courseGoals,setCourseGoals] = useState([]); 

  // react handles this, therefofre, we do not have to focus on passing parameter
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    // not a best way to update state, when new state depends on previous states
    // setCourseGoals([...courseGoals,enteredGoalText]); 

    // using spread operator 
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,enteredGoalText]);
    console.log(enteredGoalText);

  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        {/* in inputContainer, i have used flexDirection, 
        it arranges the component in that view in the correponding way
        for example: row -> it will place it rowwise
                  and column - it will place it columnwise  */}
            <TextInput style={styles.textInput} placeholder='Your course goals'
            onChangeText={goalInputHandler}/>
            {/* // goalInputHandler() - evaluated when the app is evaluated
            // we want react to evaluate it, therefore, do goalInputHandler */}
            
            <Button title = "Add Goal" onPress={addGoalHandler} /> 
            {/* button attribute does not 
            have style property ,  */}

      </View>
      <View style = {styles.goalsContainer}>
        {/* scrollView - allows to make content 
         scrollable  */}
         {/* why are we having the key prop otherwise we get the warning 
        - each child in teh list should have a unique 'key' prop*/}
        {/* <ScrollView  alwaysBounceVertical='false'>
          
          { courseGoals.map( (goal) => 
          <View style={styles.goalItem}key={goal}>  
            <Text  style={styles.goalText} > {goal}</Text> 
          </View>)} 
        </ScrollView> 
        */}
      <FlatList data={courseGoals} renderItem={itemData => {
        // itemData.index
        return <GoalItem />;
      } }alwaysBounceVertical='false' />
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
  },
  goalItem:{
    margin:8,
    borderRadius:6,
    // dashes are not supported in js, therefore instead of background-Color
    // it is backgroundColor
    backgroundColor:'#5e0acc',
    color: 'white'
  },
  goalText:{
    color:'white',
  }
});
