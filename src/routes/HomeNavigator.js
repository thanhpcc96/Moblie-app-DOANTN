import React from 'react';
import { TabNavigator } from 'react-navigation';
import Touchable from '@appandflow/touchable';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { HomeScreen }
    from '../screens';
import Colors from '../../constains/color';

const avatarButton = styled(Touchable) `
    marginLeft: 8;
`;

const NavbarDefaultStyle = {
    backgroundColor: Colors.blueColor,
}

export default TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle: NavbarDefaultStyle,
            headerLeft: (
                <avatarButton feedback="opacity" onPress={() => alert("Chua hoan thanh. trong HomeNavigation")}>
                    <MaterialIcons
                        name="account-circle"
                        size={30}
                        color="#fff"
                    />
                </avatarButton>
            ),
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome
                    name="home"
                    size={25}
                    color={tintColor}
                />
            )
        })
    },
    Trackings:{
        screen: HomeScreen
    }
});