import React, {PureComponent} from 'react';
import {Flatlist, Text, View} from 'react-native';

// Styles
import {Styles, Themes} from '../styles';

// Components
import Logo from '../components/Logo';
import MainList from '../components/MainList';


// Screen Component
class MainScreen extends PureComponent {

	// Screen Header
	static navigationOptions = {
		headerTitle: <Logo />,
		headerLeft: <View></View>,
		headerRight: <View></View>,
		headerStyle: {
			backgroundColor: Themes.royale.spacecadet
		}
	}

	render(){
	  	return (
	    	<View style={Styles.view}>
	    		<MainList />
	    	</View>
	  	)
	}
}

export default MainScreen