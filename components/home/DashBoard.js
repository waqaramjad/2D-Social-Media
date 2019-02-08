import * as React from "react";

import { AppRegistry ,  View,StyleSheet , ImageBackground , StatusBar  , TouchableHighlight ,TouchableOpacity ,  Image } from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Text
  ,Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem ,
  Radio , Item , Input , 
    Card, CardItem , Label
} from "native-base";
import Modal from "react-native-modal";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import firebase from 'firebase';

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
          userName : '' , 
          visibleModal: false , 
          visbleModalForEmail : false , 
          visbleModalForPassword : false , 
          visbleModalForHeaderText : false , 
          visbleModalForImage : false ,
          newEmail : '' , 
          currentPasswordForEmail : '' , 
          currentPasswordForPassword : '' , 
          newPassword : '' , 


        }
        const { state, navigate } = this.props.navigation;
      //  UserName = state.params.userName
     
               console.log('this.props')
              //  console.log(userName)
      }
    componentDidMount() {
            
        const { navigate } = this.props.navigation; 
     
    
    // var a = this.props.navigation.navigate("Home") 
    var a = this.props.navigation
   
        // setTimeout(function(){ navigate("Login", {screen: "Screen Two"})}, 5500);
    
    }

// changePassword = (currentPassword1) => {
//   // alert('done')
//   var currentPassword = currentPassword1
  
//     alert('done')
//     var user = firebase.auth().currentUser;
//     console.log('user')
//     console.log(user)
//     var cred = firebase.auth.EmailAuthProvider.credential(
//       user.email, currentPassword);

//       return user.reauthenticateWithCredential(cred);
  
//     // console.log(cred)
// }

reauthenticate = (currentPassword) => {
  var user = firebase.auth().currentUser;
  var cred = firebase.auth.EmailAuthProvider.credential(
      user.email, currentPassword);
  return user.reauthenticateWithCredential(cred);
}

changePassword = (currentPassword, newPassword) => {
  this.reauthenticate(currentPassword).then(() => {
    var user = firebase.auth().currentUser;
    user.updatePassword(newPassword).then(() => {
      console.log("Password updated!");
    }).catch((error) => { console.log(error); });
  }).catch((error) => { console.log(error); });
}

changeEmail = (currentPassword, newEmail) => {
  this.reauthenticate(currentPassword).then(() => {
    var user = firebase.auth().currentUser;
    user.updateEmail(newEmail).then(() => {
      console.log("Email updated!");
    }).catch((error) => { console.log(error); });
  }).catch((error) => { console.log(error); });
}

    renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text>{text}</Text>
          
        </View>
      </TouchableOpacity>
    );


    renderModalContent = () => (
      <View style={styles.modalContent}>
        <Text>Hello!</Text>
        <TouchableOpacity onPress={()=>{this.setState({visbleModalForEmail:true , visibleModal: false})}}>
        <View style={styles.button}>
          <Text>change email  </Text>
          
        </View>
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.changeEmail('123456', 'waqaramjad420@gmail.com')}>
        <View style={styles.button}>
          <Text>re authen  </Text>
          
        </View>
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.changePassword('123456', 'waqaramjad420@gmail.com')}>
        <View style={styles.button}>
          <Text>pass </Text>
          
        </View>
      </TouchableOpacity>
          
        {/* <Label style={styles.labelTextRadio}>Copper Drops</Label>                    */}
   
   {/* <RadioForm
     radio_props={true}
     initial={false}
     formHorizontal={true}
     labelHorizontal={true}
     buttonColor="black"
     animation={false}
     onPress={(value) => {alert('uyg')

     }}

     
     buttonSize={20}
     labelStyle={{color: 'black'}}
     
     
     
     
     />  */}
     {/* <Button><Text>xcbxcbxc</Text></Button> */}
         
        {/* </Content> */}
        {this.renderButton("Close", () => this.setState({ visibleModal: null }))}
      </View>
    );
   

    renderModalContentForEmail = () => (
      <View style={styles.modalContent}>
        {/* <Text>Hello!</Text> */}
        {/* <TouchableOpacity onPress={()=>this.reauthenticate('000000')}>
        <View style={styles.button}>
          <Text>change email  </Text>
          
        </View>
      </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={()=>this.changeEmail('123456', 'waqaramjad420@gmail.com')}>
        <View style={styles.button}>
          <Text>2nd Password  </Text>
          
        </View>
      </TouchableOpacity> */}

<Item >
            {/* <Icon active name='lock' /> */}

              <Input onChangeText={newEmail => this.setState({newEmail})}  placeholder='new Email '/>
            </Item>
<Item >
            {/* <Icon active name='lock' /> */}

              <Input onChangeText={currentPasswordForEmail => this.setState({currentPasswordForEmail})}  placeholder='current Password '/>
            </Item>
            <TouchableOpacity onPress={()=>this.changeEmail(this.state.currentPasswordForEmail , this.state.currentPasswordForEmail)}>
        <View style={styles.button}>
          <Text>change email  </Text>
          
        </View>
      </TouchableOpacity>
        {this.renderButton("Close", () => this.setState({ visibleModal: null }))}
      </View>
    );
    renderModalContentForPassword = () => (
      <View style={styles.modalContent}>
        <Text>Hello!</Text>
        <TouchableOpacity onPress={()=>this.reauthenticate('000000')}>
        <View style={styles.button}>
          <Text>change email  </Text>
          
        </View>
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.changeEmail('123456', 'waqaramjad420@gmail.com')}>
        <View style={styles.button}>
          <Text>2nd Password  </Text>
          
        </View>
      </TouchableOpacity>
          
        {this.renderButton("Close", () => this.setState({ visibleModal: null }))}
      </View>
    );
    renderModalContentForHeaderText = () => (
      <View style={styles.modalContent}>
        <Text>Hello!</Text>
        <TouchableOpacity onPress={()=>this.reauthenticate('000000')}>
        <View style={styles.button}>
          <Text>change email  </Text>
          
        </View>
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.changeEmail('123456', 'waqaramjad420@gmail.com')}>
        <View style={styles.button}>
          <Text>2nd Password  </Text>
          
        </View>
      </TouchableOpacity>
          
        {this.renderButton("Close", () => this.setState({ visibleModal: null }))}
      </View>
    );

    render() {
      console.log(this.state.newEmail)
        
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
      <Modal
              isVisible={this.state.visibleModal === true}
              onBackdropPress={() => this.setState({ visibleModal: null })}
            >
              {this.renderModalContent()}
            </Modal>

            {/* /*************************************Modal pass  */ }

            <Modal
              isVisible={this.state.visbleModalForEmail === true}
              onBackdropPress={() => this.setState({ visbleModalForEmail: null })}
            >
              {this.renderModalContentForEmail()}
            </Modal>
            {/* /*************************************Modal header text  */ }

            <Modal
              isVisible={this.state.visbleModalForPassword === true}
              onBackdropPress={() => this.setState({ visbleModalForPassword: null })}
            >
              {this.renderModalContentForPassword()}
            </Modal>
            {/* /*************************************Modal header text  */ }

            <Modal
              isVisible={this.state.visbleModalForHeaderText === true}
              onBackdropPress={() => this.setState({ visbleModalForHeaderText: null })}
            >
              {this.renderModalContentForHeaderText()}
            </Modal>
   {/* <View style={{position: 'absolute', top: 1, right: 15 ,  justifyContent: 'center', alignItems: 'center'}} > */}
     {/* <Text style={{ fontSize: 25 ,   fontWeight: 'bold' , color:'white'}}>UserName</Text> */}
     {/* <Icon name='settings' fontSize='40'  style={{fontSize:27 , color :  'white'}} onpress={alert('fs')}/> */}
   {/* </View> */}
   <Button  transparent style={{position: 'absolute', top: 1, right: 15 ,  justifyContent: 'center', alignItems: 'center'}}  onPress={()=>{this.setState({visibleModal:true})}}>
            
            <Icon name='settings' fontSize='40'  style={{fontSize:27 , color :  'white'}}/>
          </Button>
</ImageBackground>


          </Container>
        )

 
    }
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   justifyContent: 'center',
      
    // },
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
  } , 
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  scrollableModal: {
    height: 300
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center"
  }


  });
  
export default DashBoard;
