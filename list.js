import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',
                   interest:'',
                   time:''};
  }

  render() {
    let   total = (parseInt(this.state.interest) * parseInt(this.state.time) * parseInt(this.state.text))/ 100
    
    let k = parseInt(total) + parseInt(this.state.text)
   
    return (
      <View style={{padding: 10,marginTop:5}}>
        <Text style={{fontSize:25,color:'#ff00ff',textAlign:"center"}}>Simple Interest</Text>
        <TextInput
          style={{height: 40,borderColor:'#a52a2a',borderWidth:1,margin:5,paddingLeft:5}}
          placeholder="Enter Principle"
          onChangeText={(text) => this.setState({text})}
        />
         <TextInput
          style={{height: 40,borderColor:'#a52a2a',borderWidth:1,margin:5,paddingLeft:5}}
          placeholder="Enter Rate of Interest"
          onChangeText={(interest) => this.setState({interest})}
        />
          <TextInput
          style={{height: 40,borderColor:'#a52a2a',borderWidth:1,margin:5,paddingLeft:5}}
          placeholder="Time period (in months)" 
          onChangeText={(time) => this.setState({time})}
        />
        <Text style={{padding: 10}}>
         Interest is :{total > 0 && total}
        </Text>
        <Text style={{padding: 10}}>
          Total Amout is:{k >0 && k}
        </Text>
      </View>
    );
  }
}