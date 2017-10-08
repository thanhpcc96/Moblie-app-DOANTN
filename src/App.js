// @flow
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { UIManager, AsyncStorage } from 'react-native';




if(UIManager.setLayoutAnimationEnabledExperimental){
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type State={
  isReady: boolean,
};

class App  extends PureComponent<{}, State>{
  state={
    isReady: false
  }
  componentDidMount(){

  }
}
export default App;

