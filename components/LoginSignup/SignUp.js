'use strict';

import React, {Component} from "react";
import {Text, View, ScrollView, TouchableOpacity} from "react-native";
import styles from "./styles";
import {ButtonRoundBlue, IconInput} from "@controls";
import {Actions} from "react-native-router-flux";
import firebase from 'firebase'
export default class SignUp extends Component {
  constructor(props){
		super(props)
		this.state={
     userName : '' , 
     
			userEmail:'', 
      userPassword:''	, 
      cnfrmPass :''


     		
		}
	}



   signupAction = () => {
    let uid ;
        const {userName} = this.state;
       
        const {userEmail} = this.state;
        // const {CompanyName} = this.state;
        const {userPassword} = this.state;
        const {cnfrmPass} = this.state;
       

        // // console.log(FirstName)
    
  
        var obj = {
  
          userName : userName,
        

          mail : userEmail,
          // pass : userPassword , 
         

        }
        var str1 = userPassword;
    var str2 = cnfrmPass;
    var myUId ; 
    // //    
        var n = str1.localeCompare(str2);
        // console.log(n)  

        if(n===-1){
          alert('Password not matched')

        }
        else{

        // var userEmail1 = 'pp@p.com'
        // var userPassword1 = '000000'
        firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword)
            .then((createdUser) => {
                alert('signed up successfully');
                // console.log(createdUser.user.uid)
                myUId = createdUser.user.uid ; 
                // console.log(myUId)

                
  
                firebase.database().ref('users/'+myUId+'/'  ).set(obj)
                    .then(() => {
                    })
  
  
            }).catch((err)=>{
              // console.log(err)
              alert(err.message)
              
          })
        }
  
  }
// }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{marginTop: -20}}>
            <IconInput   onChangeText= {userName => this.setState({userName})}
 placeholder="User Name " image={require("@images/icon-user.png")}/>

{/* <IconInput   onChangeText= {lastName => this.setState({lastName})}
 placeholder="Last Name" image={require("@images/icon-user.png")}/> */}

            {/* <IconInput 	  onChangeText= {CompanyName => this.setState({CompanyName})}
            placeholder="Company name" image={require("@images/icon-email.png")}/> */}
            <IconInput 	  onChangeText= {userEmail => this.setState({userEmail})}
            placeholder="Email" image={require("@images/icon-email.png")}/>

           
            
            <IconInput secureTextEntry={true}  onChangeText= {userPassword => this.setState({userPassword})} placeholder="Password" image={require("@images/icon-password.png")}/>
            <IconInput secureTextEntry={true}  onChangeText= {cnfrmPass => this.setState({cnfrmPass})} placeholder=" Confirm Password" image={require("@images/icon-password.png")}/>
            {/* <IconInput   onChangeText= {billINfo => this.setState({billINfo})}
             placeholder="Biling Info " image={require("@images/icon-user.png")}/>
            <IconInput   onChangeText= {CardNo => this.setState({CardNo})}
             placeholder="Credit Card no " image={require("@images/icon-user.png")}/> */}
          </View>
          <ButtonRoundBlue
           onPress={this.signupAction}
            text="Register"/>

          <Text style={{color: 'white', opacity: 0.7, marginRight: 5, fontSize: 15}}>
            already have an account
          </Text>
          <TouchableOpacity  style={{alignSelf: 'flex-end', marginRight: 15}}>
            <Text style={styles.registerLink}>
              Sign in now
            </Text>
          </TouchableOpacity>

          {/* <Text style={{color: '#aaa', textAlign: 'center', padding: 12}}>
            By clicking "Registration" I agree  <Text style={{color: '#3071D0'}}>Terms of Service</Text>
          </Text> */}

        </View>
      </ScrollView>
    );
  }
}