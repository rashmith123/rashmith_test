import React,{Component}  from 'react';
import { StyleSheet, Alert, Text, View, TextInput, Button} from 'react-native';




export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      email_statement:'',
      password_statement:'',
    };
  }
    button_press = () => {
    
     
    var reg = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
     if (reg.test(this.state.username) === true){
        alert('Valid email');
        this.setState({email_statement: 'Valid Email'});
    }
    else{
        this.setState({email_statement: 'Invalid Email'});

      
    }
  
      if (this.state.password=='') {
        this.setState({password_statement: 'Invalid Password'});
    } else {
      this.setState({password_statement: 'Valid Password'});
  
}


}
render() {
  return (
<View >   
  <View style={ styles.container}>
    <View style={ styles.childcontainer}>
      <View style={ styles.childchildcontainer}>
        <Text  style={ styles.Text}>Email</Text>
      </View>
     <TextInput value={this.state.username} onChangeText={(username) => this.setState({ username })} placeholder = "Your@address.net" style={ styles.input}/>
     

   </View>
    <View style={{alignSelf:'flex-end', margin:2, marginRight:15}}>
      <Text  style={{color:'red'}} >{this.state.email_statement}</Text>
    </View>
   <View style={ styles.childcontainer}>
     <View style={ styles.childchildcontainer}>
        <Text style={ styles.Text}>Password</Text>
     </View>
        <TextInput onChangeText={(password) => this.setState({ password }) }placeholder = "**********" secureTextEntry={true} style={ styles.input}/>
    </View>
    <View style={{alignSelf:'flex-end', margin:2, marginRight:15}}>
      <Text style={{color:'red'}}>{this.state.password_statement}</Text>
    </View>
    <View style={ {height:50, width:80,margin:5, alignSelf:'flex-end'}}>
        <Button title="Sign-in"  onPress={this.button_press.bind(this)}></Button>
    </View>
  </View>

</View> 
  );
}
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
    borderColor:'gray',
    borderWidth:2,

     
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

