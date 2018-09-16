import React, {PureComponent} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {withNavigation} from 'react-navigation';

// Styles
import {Styles} from '../styles';

// Component
class HeaderTitle extends PureComponent {
	render(){
		return (
			<View>
				<Text style={Styles.headerTitle}>{this.props.navigation.getParam('title')}</Text>
			</View>
		)
	}
}

export default withNavigation(HeaderTitle)