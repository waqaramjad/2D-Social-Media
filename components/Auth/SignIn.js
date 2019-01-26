import React, { Component } from 'react';
import { Container, Left , Header, Content, Body, Right, Title, Form, Item, Input, Label ,  Button, Text , Icon  } from 'native-base';
import firebase, { database } from 'firebase';
import Expo from "expo";
import { View, ScrollView, StyleSheet , TouchableOpacity , StatusBar} from "react-native";





export default class SignIN extends Component {

    constructor(props){
		super(props)
		this.state={
      loading: true , 
			userEmail:'',
			userPassword:''
		}
	}

    static navigationOptions = {
        header : null
      }
      async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
      }
      
      signinAction = () => {
   
        var myThis = this

                const {userEmail,userPassword} = this.state;
          // var myNavigator = 	this.props.prop.navigator
     const { state, navigate } = this.props.navigation;
                // // //console.log(myNavigator)
          // //console.log('done')
          var emailVerified
          var fb = firebase.auth()
          // const { navigate } = myThis.props.prop.navigation; 
            fb.signInWithEmailAndPassword(userEmail, userPassword)
                .then((signedinUser) => {
                  firebase.database().ref('users/'+signedinUser.user.uid+'/' ).once('value').then(function(snapshot) {
                    
                    
                    var user = fb.currentUser;
                    emailVerified = user.emailVerified
                    
                    
                   
                   if (emailVerified === true)
                   {
                     var checkForUser = snapshot.val()
                     var checking = checkForUser.userName
                    navigate("Splash", {userName: checking})
                   }
                   else{
                     alert('email not verified ')
                    }
                
                   //console.log('hello 1')
                    // //console.log('else')
                    // alert('Login Success')
                  //   myNavigator.push({
                  //     title: 'Home' , 
                      
                  })
    // //console.log()
    
    
                
                 
                 
                  // });
                  // //console.log('check'+signedinUser.user.uid)
    
                        
                                // //console.log('done 2')
    
                }).catch((err)=>{
                  // //console.log(err)
                                alert(err.message)
                            })
    
        // }
    
    }
    
    moveToSignUp= ()=>{

      // console.log(this.props)
      const { state, navigate } = this.props.navigation;
      navigate("SignUp" )
      console.log('navigate')
      // console.log(navigate)
  
  
    }
  
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        {/* <Header  /> */}
        <Header style={styles.mainColor}>
          
          <Body>
            <Title style={{color:'white' ,marginLeft:'13%' }}>ZenClause Sign In </Title>
            
          </Body>
          <Right />
        </Header>
        <Content>

        {/* <Card> */}
            {/* <CardItem > */}
            <StatusBar hidden={true} />
          <Form style={{marginTop: '10%'}}>
            <Item >
            {/* <Icon active name='lock' /> */}

              <Input onChangeText={userEmail => this.setState({userEmail})}  placeholder='Email '/>
            </Item>
            <Item  last>
              {/* <Label>Password</Label> */}
              {/* <Icon active name='lock' /> */}
              <Input  secureTextEntry={true}	onChangeText={userPassword => this.setState({userPassword})}  placeholder='Password ' />
            </Item>

            <Button block style={styles.Login} onPress={() => this.signinAction()}>
            <Text>Login</Text>
          </Button>
          
          </Form>
          <Text style={styles.textOfaccountChange}>
           Don't have account
          </Text>
          <TouchableOpacity  >
            <Text 
            onPress={this.moveToSignUp}
            style={{
  color: 'black',
  marginLeft : '3%' , 
  fontSize: 15,
  textDecorationLine: 'underline'

            }}>
              Sign Up Now
            </Text>
          </TouchableOpacity>

          {/* </CardItem> */}
         {/* </Card> */}

        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({

  textOfaccountChange : {
    marginTop : '3%' , 
    color: 'black', opacity: 0.7, fontSize: 15 , 
    marginLeft : '3%' , 
  } , 
  btn :{
    marginTop: '2%  '
  } , 
  Login : {
    marginLeft : '3%' , marginRight : '3%' , marginTop: '3%' , backgroundColor  : '#0F91DC'
  } , 
  mainColor : {
    backgroundColor  : '#0F91DC'
  }
})