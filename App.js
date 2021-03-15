import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AlertBox1 extends Component {
  displayAlert=()=>{
    alert("Play Sound 1")
  }
  render(){
  return(
    <Button color="red" title="Sound1" onPress={this.displayAlert}/>
  )
  }
}

class AlertBox2 extends Component {
  displayAlert=()=>{
    alert("Play Sound 2")
  }
  render(){
  return(
    <Button color="orange" title="Sound2" onPress={this.displayAlert}/>
  )
  }
}

class AlertBox3 extends Component {
  displayAlert=()=>{
    alert("Play Sound 3")
  }
  render(){
  return(
    <Button color="green" title="Sound2" onPress={this.displayAlert}/>
  )
  }
}
class AlertBox4 extends Component {
  displayAlert=()=>{
    alert("Play Sound 4")
  }
  render(){
  return(
    <Button color="blue" title="Sound2" onPress={this.displayAlert}/>
  )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{width:200,height:150,marginLeft:70,marginTop:100}} >
      <AlertBox1/>
      <Text>     </Text>
      <AlertBox2/>
      <Text>     </Text>
      <AlertBox3/>
      <Text>     </Text>
      <AlertBox4/>
      <Text>     </Text>
         <Text>My First React Component</Text>
      </View>
      
    );
  }
}