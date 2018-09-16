import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// Navigation
import {withNavigation} from 'react-navigation';

// Styles
import {Styles} from '../styles';

// Component
class MainItem extends PureComponent {
	constructor(props){
		super(props)

		// Bind early
		this._navigate = this._navigate.bind(this)
	}

	// Will show item on ProductScreen
	_navigate(){
		this.props.navigation.navigate("Product", {id: this.props.item.id})
	}

	render(){
		return (
			<View style={Styles.card}>
				<View style={{ flexDirection: "row", alignItems: 'flex-start' }}>
					<Image source={{uri: this.props.item.picture}} style={Styles.smallAvatar} />
					<View style={{ flexDirection: "column" }}>
						<TouchableOpacity onPress={this._navigate}>
							<Text style={Styles.title} >{this.props.item.title}</Text>
						</TouchableOpacity>
						<Text style={Styles.desc}>{this.props.item.desc}</Text>
					</View>
				</View>
			</View>
		)
	}
}

export default withNavigation(MainItem)