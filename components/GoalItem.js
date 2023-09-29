// import React from 'react '

import { StyleSheet, Text, View} from 'react-native';

function GoalItem(props){

// how does GoalItem function know about the itemData ? 
// the code worked even without the props, not sure why 
    return (
        <View style={styles.goalItem}>  
        <Text  style={styles.goalText} > { props.text} </Text> 
      </View>
    );
}



export default GoalItem; 

const styles = StyleSheet.create({
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
  