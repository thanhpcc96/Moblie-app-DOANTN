import React, { Component } from 'react';
import {
    View,
    Text, Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    onPress={() => this.props.navigation.navigate('Profile')} title={'Vao trang ca nhan'} />
            </View>
            
        );
    }
}

export default HomeScreen;

