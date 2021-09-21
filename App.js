import React, { Component } from "react";
import { StyleSheet,View,SafeAreaView,Text,Button } from "react-native";

export default class App extends Component{
constructor(){
  super()
    this.state = {
      oneBox:'green',
      twoBox:'blue',
      threeBox:'yellow',
      fourBox:'orange',
    };
}

 changeBoxColor(num){
  if(num === 1){
  if(this.state.oneBox === 'green'){
    this.setState({
      oneBox: 'red'
    });
  }else {
    this.setState({
      oneBox:'green'
    });
  }
}else if(num === 2){
  if(this.state.twoBox === 'blue'){
    this.setState({
      twoBox: 'red'
    });
  }else {
    this.setState({
      twoBox:'blue'
    });
  }
}else if(num === 3){
  if(this.state.threeBox === 'yellow'){
    this.setState({
      threeBox: 'red'
    });
  }else {
    this.setState({
      threeBox:'yellow'
    });
  }
}else if(num === 4){
  if(this.state.fourBox === 'orange'){
    this.setState({
      fourBox: 'red'
    });
  }else {
    this.setState({
      fourBox:'orange'
    });
  }
}

}
  render(){
    return(
      <View style={styles.mainStyle}>
        <View style={styles.boxMainStyle}>
          <Button title="One Box" onPress={() => this.changeBoxColor(1)}/>
          <Button title="Two Box" onPress={() => this.changeBoxColor(2)}/>
          <Button title="Three Box" onPress={() => this.changeBoxColor(3)}/>
          <Button title="Four Box" onPress={() => this.changeBoxColor(4)}/>
        </View>
        <View style={styles.boxMainStyle}>
          <View style={[styles.Box,{backgroundColor:this.state.oneBox}]}><Text style={{fontSize:25}}>One Box</Text></View>
          <View style={[styles.Box,{backgroundColor:this.state.twoBox}]}><Text style={{fontSize:25}}>Two Box</Text></View>
          <View style={[styles.Box,{backgroundColor:this.state.threeBox}]}><Text style={{fontSize:25}}>Three Box</Text></View>
          <View style={[styles.Box,{backgroundColor:this.state.fourBox}]}><Text style={{fontSize:25}}>Four Box</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle:{
    flex:1,
    backgroundColor:'#9be7ff',
    flexDirection:'row',
  },
  boxMainStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-around',
  },
  Box:{
    width:100,
    height:100,
    alignItems:'center',
    justifyContent:'center',
  }
});