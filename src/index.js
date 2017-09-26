import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity
} from 'react-native';
import RNAccountKit from 'react-native-facebook-account-kit';
class App extends Component {
   
    _loginSMS(){
        RNAccountKit.loginWithPhone()
        .then((token) => {
            if (!token) {
              console.log('Login cancelled')
            } else {
              console.log(`Logged with phone. Token: ${token}`)
            }
          });
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:"#FFF6", flex:1 }}>
                <TouchableOpacity 
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                    onPress={()=>this._loginSMS()}>
                    <Text> Do an tot nghiep</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default App;