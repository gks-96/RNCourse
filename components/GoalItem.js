// import React from 'react '

import { StyleSheet, Text,TextInput, View,Button,ScrollView,FlatList } from 'react-native';

function GoalItem(){

// how does GoalItem function know about the itemData ? 
    return (
        <View style={styles.goalItem}>  
        <Text  style={styles.goalText} > { itemData.item} </Text> 
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
  