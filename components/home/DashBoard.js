import * as React from "react";

import { AppRegistry, View,StyleSheet , ImageBackground , StatusBar  , TouchableHighlight ,TouchableOpacity ,  Image } from 'react-native';

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
         <Container>
           <StatusBar hidden={true} />
{/* <View > */}
  {/* <Text style={{color:'white' , position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>Centered text</Text> */}
{/* </View> */}
          {/* <View style={styles.imageContainer}> */}
          
        {/* <Image style={styles.image} source={{uri: 'https://i.ibb.co/X4mtzcC/Neighbourhood.jpg'}} /> */}
        {/* <Image style={styles.image} source={{uri: 'https://i.ibb.co/zbGVYw1/ezgif-com-webp-to-png.png'}} /> */}
        {/* <Image style={styles.image} source={{uri: 'https://i.ibb.co/VqSLXqz/rsz-ezgifcom-webp-to-png.png'}} /> */}
        {/* <Image style={styles.image} source={{uri: 'https://i.ibb.co/JmFqWKw/rsz-3ezgifcom-webp-to-png.png'}} /> */}
        {/* <Image style={styles.image} source={{uri: 'https://i.ibb.co/9nxCvs1/rsz-1rsz-3ezgifcom-webp-to-png.jpg'}} /> */}
        {/* <Image style={styles.image} source={{uri: 'https://i.ibb.co/sKBWVRj/rsz-3ezgifcom-webp-to-png.jpg'}} /> */}
        {/* <Image style={styles.image} source={{uri: 'https://i.ibb.co/j89xFZ5/ezgif-com-gif-maker.jpg'}} /> */}
        {/* <Image style={styles.image} /> */}
      {/* </View> */}
      <ImageBackground  source={{uri: 'https://i.ibb.co/VNxT8fh/ezgif-com-rotate.png'}} style={{width: '100%', height: '100%'}}>
   <View style={{position: 'absolute', top: 0, left: 0, right: 0 ,  justifyContent: 'center', alignItems: 'center'}}>
     <Text style={{ fontSize: 25 ,   fontWeight: 'bold' , color:'white'}}>{UserName}</Text>
   </View>
</ImageBackground>


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

    imageContainer: {
      flex: 1,
      alignItems: 'stretch' ,
      
    },
    image: {
      flex: 1 , 
      // width : '80%', 
      // height : null
     
    } , 
    bgImageWrapper: {
      position: 'absolute',
      top: 0, bottom: 0, left: 0, right: 0
  },
  bgImage: {
      flex: 1,
      resizeMode: "stretch"
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
  }


  });
  
export default DashBoard;
