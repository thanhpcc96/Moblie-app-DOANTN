import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

@connect(
    state => ({
        navigation: state.navigation,
        client: state.client
    })
)
class AppNavigator extends Component {
    state = {}
    render() {
        const navigation = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation
        });
        
    }
}
export default AppNavigator;