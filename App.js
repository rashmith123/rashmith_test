import React  from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
<View >   
  <View style={ styles.container}>
    <View style={ styles.childcontainer}>
      <View style={ styles.childchildcontainer}>
        <Text  style={ styles.Text}>E mail</Text>
      </View>
     <TextInput placeholder = "Your@address.net" style={ styles.input}/>

   </View>
   <View style={ styles.childcontainer}>
     <View style={ styles.childchildcontainer}>
        <Text style={ styles.Text}>Password</Text>
     </View>
        <TextInput placeholder = "**********" secureTextEntry={true} style={ styles.input}/>
    </View>
    <View style={ {height:50, width:80,margin:10, alignSelf:'flex-end'}}>
        <Button title="Sign-in"  ></Button>
    </View>
  </View>

</View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    backgroundColor:"lightgray",
    marginVertical: 50,
    marginHorizontal: 20,
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 5,
    borderStyle: 'solid'

  },
  childcontainer: {
    flexDirection:'row',

    width:'95%',
     margin:5,
     alignSelf:'center',
     
  },
  childchildcontainer: {
    width:'25%',
     margin:5,
     alignSelf:'flex-start',
    

  },
  input:{
    fontSize:16,
    alignSelf: 'flex-end',
    backgroundColor:'white',
    flex:1,

     
  },
  
  Text:{
    flex:1,
    fontSize:16,
    marginLeft:10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    alignSelf:'flex-start',    
  }, 

});

