import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
class Profile extends Component {
    static navigationOptions = {
        title: 'Profile',
        headerBackTitle:<Text>Tro ve</Text>
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Man Hinh Profile</Text>
            </View>
        );
    }
}
export default Profile;