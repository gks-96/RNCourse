
import { StyleSheet, View, FlatList } from 'react-native';
// button is self enclosing tag 
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { useState } from 'react'
// custom component - good practice to start with capital 
export default function App() {
  
  const[courseGoals,setCourseGoals] = useState([]); 
  
  function deleteGoalHandler(){
    console.log("delete");
  }
  function addGoalHandler(enteredGoalText){
    // not a best way to update state, when new state depends on previous states
    // setCourseGoals([...courseGoals,enteredGoalText]); 

    // using spread operator 
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,
      { text: enteredGoalText,
        id : Math.random().toString()},
    ]);
    console.log(enteredGoalText);

  }
  return (
    <View style={styles.appContainer}>
     <GoalInput onAddGoal= {addGoalHandler} />
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
        return <GoalItem 
                text = {itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                />;
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
    paddingHorizontal: 16
  },
  goalsContainer:{
    flex: 5
  }
});
