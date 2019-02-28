import React, { Component } from "react";

import {
  View,
  StyleSheet,
  BackHandler,
  Dimensions,
  defaultProps,
  Image,
  AppRegistry,
  TouchableOpacity
} from "react-native";

import {
  Text,
  Container,
  Content,
  Button,
  Body,
  Card,
  CardItem
} from "native-base";
import firebase from "firebase";
import { ImagePicker } from "expo";
export interface Props {
  navigation: any;
}


// Custom Components
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
var UID , userName ;
// var User
export class SettingComponent extends Component <Props, State>{
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false , 
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

    UID = this.props.UID
    UserName= this.props.UserName
    console.log(this.props)
  }
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

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
            alert("Image Change ");
          })
          .catch(error => {
            alert(error);
          });
        console.log(a);
      }
    };
  
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
  

  

  render() {
    const window = Dimensions.get("window");
    const { isLoading } = this.props;
    var that = this 
    return (
      <Container>
        <View style={styles.contView}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{flex: 1}}>
              <Card style={{backgroundColor: "#1fbbd4", justifyContent: "center", alignItems: "center"}}>
                <CardItem button onPress={() =>{that.changeEmail}} style={{backgroundColor: "#1fbbd4"}}> 
                <Text style={{backgroundColor: "#1fbbd4" }}>Change Email</Text>
                </CardItem>
              </Card>
            </View>
            <View  style={{flex: 1}}>
              <Card style={{backgroundColor: "#66bcff", justifyContent: "center", alignItems: "center"}}>
                <CardItem button onPress={() => alert("This is Card Header")} style={{backgroundColor: "#66bcff"}}>
                    <Text style={{backgroundColor: "#66bcff" }}>Change Banner Text</Text>
                </CardItem>
              </Card>
              
            </View>
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View  style={{flex: 1}}>
              <Card style={{backgroundColor: "#a1b223", justifyContent: "center", alignItems: "center"}}>
                <CardItem button onPress={() => alert("This is Card Header")} style={{backgroundColor: "#a1b223"}}> 
                    <Text style={{backgroundColor: "#a1b223" }}>Change Image</Text>
                </CardItem>
              </Card>
            </View>
            <View  style={{flex: 1}}>
              <Card style={{backgroundColor: "#f9622d", justifyContent: "center", alignItems: "center"}}> 
                <CardItem button onPress={() => alert("This is Card Header")} style={{backgroundColor: "#f9622d"}}>
                    <Text style={{backgroundColor: "#f9622d" }}>Change Password</Text>
                </CardItem>
              </Card>
            </View>
          </View>
          <View style={{ flexDirection: "row" , flex: 1}}>
            <View  style={{flex: 1}}>
              <Card style={{backgroundColor: "#fcbc2f", justifyContent: "center", alignItems: "center"}}>
                <CardItem button onPress={() => alert("This is Card Header")} style={{backgroundColor: "#fcbc2f"}}>
                    <Text style={{backgroundColor: "#fcbc2f" }}>Vibrate</Text>
                </CardItem>
              </Card>
            </View>
            <View  style={{flex: 1}}>
              <Card style={{backgroundColor: "#c32222", justifyContent: "center", alignItems: "center"}}>
                <CardItem button onPress={() => alert("This is Card Header")} style={{backgroundColor: "#c32222"}}>
                    <Text style={{backgroundColor: "#c32222" }}>Cancel</Text>
                </CardItem>
              </Card>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contView: {
      flex: 1,
    flexDirection: "column",
  }
});

AppRegistry.registerComponent("AwesomeProject", () => UselessTextInput);

export default SettingComponent;
