// import React from 'react '

import { StyleSheet, Text, View,Pressable} from 'react-native';

function GoalItem(props){




// how does GoalItem function know about the itemData ? 
// the code worked even without the props, not sure why 
    return (
      <Pressable onPress = {props.onDeleteItem.bind(this,props.id)}>
        <View style={styles.goalItem}>  
            <Text  style={styles.goalText} > { props.text}  </Text> 
        </View>
      </Pressable>
      
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
  