import React, {PureComponent} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Themes} from '../styles';

class Logo extends PureComponent {
	render(){
		return (
			<View style={Styles.middle}>
				<Text style={{color: Themes.royale.honey, alignSelf: 'center', fontWeight: 'bold', fontSize: 18}}>
					Alpha
				</Text>
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	middle: {
		flex: 1
	}
})

export default Logo