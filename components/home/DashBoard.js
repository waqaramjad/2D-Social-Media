import * as React from "react";

import { AppRegistry, View,StyleSheet ,  TouchableHighlight ,TouchableOpacity ,  Image } from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem , 
    Card, CardItem
} from "native-base";
// import React, { Component } from 'react';
// import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
var UserName  
class DashBoard extends React.Component<Props, State> {
    static navigationOptions = {
        header : null
      }

      constructor(props){
        super(props)
        this.state={
          userName : ''
        }
        const { state, navigate } = this.props.navigation;
       UserName = state.params.userName
     
               console.log('this.props')
              //  console.log(userName)
      }
    componentDidMount() {
            
        const { navigate } = this.props.navigation; 
     
    
    // var a = this.props.navigation.navigate("Home") 
    var a = this.props.navigation
   
        // setTimeout(function(){ navigate("Login", {screen: "Screen Two"})}, 5500);
    
    }
   
    render() {
      
        
        return (
<Container style={styles.container}>
<Card>

<CardItem >
    {/* <Left/> */}
    <Body>

              <Text style={{marginLeft:'33%',  marginTop: '10%' ,  fontSize: 25 , fontWeight: 'bold', }}> {UserName}</Text>
    </Body>
{/* <Right/> */}
            </CardItem>
<CardItem>
    
 {/* style={
{
	
	width:10,
    height: 10,
  }
				}   */}
<Image source={require('../../assets/Dashboard/Neighbourhood.jpg')}
style={{height: 350, width: null, flex: 1 , marginTop : "7%"}}
 
></Image>
</CardItem>
</Card>
        
      </Container>

          
         
        )

 
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },

    centerContent : {
     
        
        justifyContent: 'center',
        alignItems: 'center',
     
    }, 
    bodyContent : {
      marginLeft : '4%'
    } , 
    buttonofSend : {
      width : '15%' , 
      color : 'white'
    } , 
    email :{
      marginLeft : '30%'
    } ,
    titleText: {
      fontSize: 15,
      fontWeight: 'bold',
    },


  });
  
export default DashBoard;
