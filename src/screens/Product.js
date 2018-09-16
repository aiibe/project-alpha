import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

// Styles
import {Styles, Themes} from '../styles';

// Redux
import {connect} from 'react-redux';
import {getItem} from '../actions/content';

// Components
import HeaderTitle from '../components/Header';


// Screen Component
class ProductScreen extends PureComponent {

	// Screen Header
	static navigationOptions = {
		headerTitle: <HeaderTitle />,
		headerLeft: <View></View>,
		headerRight: <View></View>,
		headerStyle: {
			backgroundColor: Themes.royale.spacecadet
		}
	}

	render(){
		return (
			<View style={Styles.view}>
				<View style={Styles.card}>
					<Text style={Styles.title}>{this.props.item.title}</Text>
					<Text style={Styles.desc}>{this.props.item.desc}</Text>
				</View>
			</View>
		)
	}
}


const mapStateToProps = (state, ownProps) => {
	let id = ownProps.navigation.getParam('id')
	return {
		item: getItem(state.content, id)
	}
}

export default connect(mapStateToProps)(ProductScreen)