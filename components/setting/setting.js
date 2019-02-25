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

// Custom Components
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export class SettingComponent extends Component {
  constructor() {
    super();
    this.state = { isModalVisible: false };
  }
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    const window = Dimensions.get("window");
    const { isLoading } = this.props;
    return (
      <Container>
        <View style={styles.contView}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{flex: 1}}>
              <Card style={{backgroundColor: "#1fbbd4", justifyContent: "center", alignItems: "center"}}>
                <CardItem button onPress={() => alert("This is Card Header")} style={{backgroundColor: "#1fbbd4"}}> 
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
