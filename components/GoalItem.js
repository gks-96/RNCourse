// import React from 'react '

import { StyleSheet, Text, View,Pressable} from 'react-native';

function GoalItem(props){

// how does GoalItem function know about the itemData ? 
// the code worked even without the props, not sure why 
    return (
      
         <View style={styles.goalItem}>  
          <Pressable 
            android_ripple={{color :'#210644'} }
            onPress = {props.onDeleteItem.bind(this,props.id)}
            style = { ( {pressed} ) => pressed && styles.pressedItem} > 
            <Text  style={styles.goalText} > { props.text}  </Text>   
          </Pressable>
          
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
    pressedItem : {
        opacity:0.3
    },
    goalText:{
      color:'white',
    }
  });
  