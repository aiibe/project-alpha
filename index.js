import {AppRegistry} from 'react-native';
import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Root from './Navigator';
import {name as appName} from './app.json';

class App extends PureComponent {
	render(){
		return (
			<Provider store={store}>
				<Root />
			</Provider>
		)
	}
}

AppRegistry.registerComponent(appName, () => App);
