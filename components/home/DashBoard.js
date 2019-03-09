import * as React from "react";

import {
  AppRegistry,
  Dimensions,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

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
  ListItem,
  Radio,
  Item,
  Input,
  Card,
  CardItem,
  Label
} from "native-base";
import Modal from "react-native-modal";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import firebase from "firebase";
import { ImagePicker } from "expo";
import { ScreenOrientation } from "expo";
import BckImage from "../../assets/images/test.png";
import SettingImage from "../../assets/images/setting-icon.png";
import NumberOne from "../../assets/images/number-one.png";
import NumberTwo from "../../assets/images/number-two.png";
import NumberThree from "../../assets/images/number-three.png";
import NumberFour from "../../assets/images/number-four.png";
import NumberFive from "../../assets/images/number-five.png";
// import SettingComponent from "../setting/setting";
// import React, { Component } from 'react';
// import styles from "./styles";
export interface Props {
  navigation: any;
}
export interface State {}
var UserName;
var UID = "";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
class DashBoard extends React.Component<Props, State> {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      visibleModal: false,
      visbleModalForEmail: false,
      visbleModalForPassword: false,
      visbleModalForHeaderText: false,
      visbleModalForImage: false,
      newEmail: "",
      currentPasswordForEmail: "",
      currentPasswordForPassword: "",
      newPassword: "",
      headerText: "",
      image: null,
      btnValue: "Vibrate"
    };
    const { state, navigate } = this.props.navigation;
    console.log(state.params);
    // UserName = state.params.userName;
    // UID = state.params.UID
    //  console.log(state.params.UID)
    //  console.log(state.params)
    //  console.log(userName)
  }
  componentDidMount() {
    const { navigate } = this.props.navigation;

    // var a = this.props.navigation.navigate("Home")
    var a = this.props.navigation;

    // LANDSCAPE_RIGHT

    // ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);

    Expo.ScreenOrientation.allow(
      Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT
    ); // setTimeout(function(){ navigate("Login", {screen: "Screen Two"})}, 5500);
  }

  changeBtn() {
    var data = this.state.btnValue;

    if (data == "Vibrate") {
      this.setState({
        btnValue: "Key Click On"
      });
    } else if (data == "Key Click On") {
      this.setState({
        btnValue: "Key Click Off"
      });
    } else if (data == "Key Click Off") {
      this.setState({
        btnValue: "Vibrate"
      });
    }
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

  reauthenticate = currentPassword => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };

  changePassword = () => {
    var currentPassword = this.state.currentPasswordForPassword;
    var newPassword = this.state.newPassword;
    var myThis = this;
    this.reauthenticate(currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            console.log("Password updated!");
            alert("Password Updated ");
            // navigate("SignIn" )
            myThis.setState({
              visbleModalForPassword: false
            });
            const { navigate } = myThis.props.navigation;
            setTimeout(function() {
              navigate("SignIn");
            }, 3000);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  changeText = () => {
    var changeText = this.state.headerText;
    //c alert(changeText)
    console.log(UID);
    console.log(UID);
    // console.log(firebase )
    var a = { userName: changeText };
    this.setState({
      visbleModalForHeaderText: false
    });
    firebase
      .database()
      .ref("users/" + UID)
      .update(a);
    alert("Header Text Updated ");
  };
  // imageChange  = () => {

  // alert('siudf')

  _pickImage = async () => {
    console.log("image");
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      var a = this.uploadImage()
        .then(() => {
          alert("Success! Your Profile Image is Updated");
        })
        .catch(error => {
          alert(error);
        });
      console.log(a);
    }
  };
  // }

  uploadImage = async () => {
    var uri = this.state.image;
    console.log(uri);
    var imageName = "profile";
    const response = await fetch(uri);
    const blob = await response.blob();
    var projectNameText = this.state.projectNameText;
    var ref = firebase
      .storage()
      .ref()
      .child(UID + "/" + imageName);
    return ref.put(blob);
  };

  changeEmail = () => {
    var currentPassword = this.state.currentPasswordForEmail;
    var newEmail = this.state.newEmail;
    var myThis = this;

    this.reauthenticate(currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updateEmail(newEmail)
          .then(() => {
            console.log("Email updated!");
            alert("Email Updated ");
            // navigate("SignIn" )
            myThis.setState({
              visbleModalForEmail: false
            });
            const { navigate } = myThis.props.navigation;
            setTimeout(function() {
              navigate("SignIn");
            }, 3000);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderButton = (text, onPress) => (
    <View style={styles.closeButton}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  renderModalContent = () => (
  //  <SettingComponent  UserName={UserName} UID={UID}/>
  <Container>
  <View style={styles.contView}>
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View style={{flex: 1}}>
        <Card style={{backgroundColor: "#1fbbd4", justifyContent: "center", alignItems: "center"}}>
          <CardItem button           onPress={() => {
            this.setState({ visbleModalForEmail: true, visibleModal: false });
          }}
 style={{backgroundColor: "#1fbbd4"}}> 
          <Text style={{backgroundColor: "#1fbbd4" }}>Change Email</Text>
          </CardItem>
        </Card>
      </View>
      <View  style={{flex: 1}}>
        <Card style={{backgroundColor: "#66bcff", justifyContent: "center", alignItems: "center"}}>
          <CardItem button 
                  onPress={() => {
                    this.setState({
                      visbleModalForHeaderText: true,
                      visibleModal: false
                    });
                  }}

                  style={{backgroundColor: "#66bcff"}}
          >
              <Text style={{backgroundColor: "#66bcff" }}>Change Banner Text</Text>
          </CardItem>
        </Card>
        
      </View>
    </View>
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View  style={{flex: 1}}>
        <Card style={{backgroundColor: "#a1b223", justifyContent: "center", alignItems: "center"}}>
          <CardItem button         onPress={() => {
            this._pickImage();
          }} style={{backgroundColor: "#a1b223"}}> 
              <Text style={{backgroundColor: "#a1b223" }}>Change Image</Text>
          </CardItem>
        </Card>
      </View>
      <View  style={{flex: 1}}>
        <Card style={{backgroundColor: "#f9622d", justifyContent: "center", alignItems: "center"}}> 
          <CardItem button           onPress={() => {
            this.setState({
              visbleModalForPassword: true,
              visibleModal: false
            });
          }}
 style={{backgroundColor: "#f9622d"}}>
              <Text style={{backgroundColor: "#f9622d" }}>Change Password</Text>
          </CardItem>
        </Card>
      </View>
    </View>
    <View style={{ flexDirection: "row" , flex: 1}}>
      <View  style={{flex: 1}}>
        <Card style={{backgroundColor: "#fcbc2f", justifyContent: "center", alignItems: "center"}}>
          <CardItem button 
                  onPress={() => {
                    this.changeBtn();
                  }}
          
          style={{backgroundColor: "#fcbc2f"}}>
              <Text style={{backgroundColor: "#fcbc2f" }}>{this.state.btnValue}</Text>
          </CardItem>
        </Card>
      </View>
      <View  style={{flex: 1}}>
        <Card style={{backgroundColor: "#c32222", justifyContent: "center", alignItems: "center"}}>
          <CardItem button onPress={() => {this.setState({ visibleModal: null })}} style={{backgroundColor: "#c32222"}}>
              <Text style={{backgroundColor: "#c32222" }}>Cancel</Text>
          </CardItem>
        </Card>
      </View>
    </View>
  </View>
</Container>

  );

  renderModalContentForEmail = () => (
    <View style={styles.modalContent}>
      <Item>
        {/* <Icon active name='lock' /> */}

        <Input
          onChangeText={newEmail => this.setState({ newEmail })}
          placeholder="Please Enter New Email "
        />
      </Item>
      <Item>
        {/* <Icon active name='lock' /> */}

        <Input
          onChangeText={currentPasswordForEmail =>
            this.setState({ currentPasswordForEmail })
          }
          placeholder="Please Enter Your Password "
        />
      </Item>
      <TouchableOpacity
        onPress={() =>
          this.changeEmail(
            this.state.currentPasswordForEmail,
            this.state.currentPasswordForEmail
          )
        }
      >
        <View style={styles.button}>
          <Text>Change Email </Text>
        </View>
      </TouchableOpacity>
      {/* {this.renderButton("Close", () => this.setState({ visibleModal: null }))} */}
    </View>
  );
  renderModalContentForPassword = () => (
    <View style={styles.modalContent}>
      <Item>
        {/* <Icon active name='lock' /> */}

        <Input
          onChangeText={currentPasswordForPassword =>
            this.setState({ currentPasswordForPassword })
          }
          placeholder="Current Password "
        />
      </Item>
      <Item>
        {/* <Icon active name='lock' /> */}

        <Input
          onChangeText={newPassword => this.setState({ newPassword })}
          placeholder="New Password "
        />
      </Item>
      <TouchableOpacity onPress={() => this.changePassword()}>
        <View style={styles.button}>
          <Text>Change Password </Text>
        </View>
      </TouchableOpacity>

      {/* {this.renderButton("Close", () => this.setState({ visibleModal: null }))} */}
    </View>
  );
  renderModalContentForHeaderText = () => (
    <View style={styles.modalContent}>
      <Item>
        <Input
          onChangeText={headerText => this.setState({ headerText })}
          placeholder="Enter New Banner Text"
        />
      </Item>

      {/* <TouchableOpacity onPress={()=>this.changeEmail(this.state.currentPasswordForEmail , this.state.currentPasswordForEmail)}> */}
      <TouchableOpacity onPress={() => this.changeText()}>
        <View style={styles.button}>
          <Text>Change Banner Text </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  callFun = () => {
    this.setState({ visibleModal: true });
  };

  render() {
    console.log(this.state.newEmail);

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
        {/* <Image style ={styles.image} source={{uri: 'https://i.ibb.co/9nxCvs1/rsz-1rsz-3ezgifcom-webp-to-png.jpg'}} /> */}
        {/* <Image style={styles.image} source={{uri: 'https://i.ibb.co/sKBWVRj/rsz-3ezgifcom-webp-to-png.jpg'}} /> */}
        {/* <Image style={styles.image} source={{uri: 'https://i.ibb.co/j89xFZ5/ezgif-com-gif-maker.jpg'}} /> */}
        {/* <Image style={styles.image} /> */}
        {/* </View> */}
        {/* <ImageBackground  source={{uri: 'https://i.ibb.co/VNxT8fh/ezgif-com-rotate.png'}} style={{width: '100%', height: '100%'}}> */}
        <ImageBackground source={BckImage} style={styles.bckImage} />
        {/* Setting */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.callFun}
          style={styles.settingImgTouch}
        >
          <Image source={SettingImage} style={styles.settingImg} />
        </TouchableOpacity>

        {/* Number 1 */}
        <TouchableOpacity
          activeOpacity={0.5}
          // onPress={this.callFun}
          style={styles.settingImgTouch}
        >
          <Image source={NumberOne} style={styles.numberOneImg} />
        </TouchableOpacity>

        {/* Number 2 */}
        <TouchableOpacity
          activeOpacity={0.5}
          // onPress={this.callFun}
          style={styles.settingImgTouch}
        >
          <Image source={NumberTwo} style={styles.numberTwoImg} />
        </TouchableOpacity>

        {/* Number 3 */}
        <TouchableOpacity
          activeOpacity={0.5}
          // onPress={this.callFun}
          style={styles.settingImgTouch}
        >
          <Image source={NumberThree} style={styles.numberThreeImg} />
        </TouchableOpacity>

        {/* Number 4 */}
        <TouchableOpacity
          activeOpacity={0.5}
          // onPress={this.callFun}
          style={styles.settingImgTouch}
        >
          <Image source={NumberFour} style={styles.numberFourImg} />
        </TouchableOpacity>

        {/* Number 5 */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.callFun}
          style={styles.settingImgTouch}
        >
          <Image source={NumberFive} style={styles.numberFiveImg} />
        </TouchableOpacity>

        <Modal
          isVisible={this.state.visibleModal === true}
          onBackdropPress={() => this.setState({ visibleModal: null })}
        >
          {this.renderModalContent()}
        </Modal>

        {/* /*************************************Modal pass  */}

        <Modal
          isVisible={this.state.visbleModalForEmail === true}
          onBackdropPress={() => this.setState({ visbleModalForEmail: null })}
        >
          {this.renderModalContentForEmail()}
        </Modal>
        {/* /*************************************Modal header text  */}

        <Modal
          isVisible={this.state.visbleModalForPassword === true}
          onBackdropPress={() =>
            this.setState({ visbleModalForPassword: null })
          }
        >
          {this.renderModalContentForPassword()}
        </Modal>
        {/* /*************************************Modal header text  */}

        <Modal
          isVisible={this.state.visbleModalForHeaderText === true}
          onBackdropPress={() =>
            this.setState({ visbleModalForHeaderText: null })
          }
        >
          {this.renderModalContentForHeaderText()}
        </Modal>
        {/* /*************************************Modal header text  */}

        <Modal
          isVisible={this.state.visbleModalForImage === true}
          onBackdropPress={() =>
            this.setState({ visbleModalForHeaderText: null })
          }
        >
          {this.renderModalContentForHeaderText()}
        </Modal>
        {/* <View style={{position: 'absolute', top: 1, right: 15 ,  justifyContent: 'center', alignItems: 'center'}} > */}
        {/* <Text style={{ fontSize: 25 ,   fontWeight: 'bold' , color:'white'}}>UserName</Text> */}
        {/* <Icon name='settings' fontSize='40'  style={{fontSize:27 , color :  'white'}} onpress={alert('fs')}/> */}
        {/* </View> */}
        {/* <Button
          transparent
          style={{
            position: "absolute",
            top: 1,
            right: 15,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            this.setState({ visibleModal: true });
          }}
        >
          <Icon
            name="settings"
            fontSize="40"
            style={{ fontSize: 27, color: "white" }}
          />
        </Button> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',

  // },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },

  centerContent: {
    justifyContent: "center",
    alignItems: "center"
  },
  bodyContent: {
    marginLeft: "4%"
  },
  buttonofSend: {
    width: "15%",
    color: "white"
  },
  email: {
    marginLeft: "30%"
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold"
  },

  imageContainer: {
    flex: 1,
    alignItems: "stretch"
  },
  
  image: {
    flex: 1
    // width : '80%',
    // height : null
  },
  bgImageWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  bgImage: {
    flex: 1,
    resizeMode: "stretch"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
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
  buttonForVib: {
    backgroundColor: "lightblue",
    padding: 12,
    marginRight: 16,
    // marginLeft: '10'
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
  },
  rowConrainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  closeButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  bckImage: {
    // flex : 1 ,
    height: '100%',
    marginLeft: 8 , 
    width: null , 
    marginRight : 8
    
  },
  settingImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: width / 1.1
  },
  settingImgTouch: {
    zIndex: 200,
    position: "absolute"
  },
  numberOneImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: width / 1.68
  },
  numberTwoImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: width / 1.53
  },
  numberThreeImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: width / 1.4
  },
  numberFourImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: width / 1.3
  },
  numberFiveImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: width / 1.2
  } , 
  contView: {
    flex: 1,
  flexDirection: "column",
}
});

export default DashBoard;
