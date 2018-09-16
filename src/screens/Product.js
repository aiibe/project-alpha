import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

// Styles
import {Styles} from '../styles';

// Redux
import {connect} from 'react-redux';
import {getItem} from '../actions/content';

// Screen Component
class ProductScreen extends PureComponent {
	render(){
		return (
			<View style={Styles.view}>
				<Text>{this.props.item.title}</Text>
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