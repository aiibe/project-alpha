import React, {PureComponent} from "react";
import {FlatList} from 'react-native';

// Redux
import {connect} from 'react-redux';

// Components
import MainItem from './MainItem';

// Component
class MainList extends PureComponent {
	constructor(props){
		super(props)

		// Bind early
		this._renderItem = this._renderItem.bind(this)
		this._keyExtractor = this._keyExtractor.bind(this)
	}

	_renderItem({item}){
		return <MainItem key={item.id.toString()} item={item} />
	}

	_keyExtractor(item){
		return item.id.toString()
	}

	render(){
		return (
			<FlatList
				data={this.props.content}
				keyExtractor={this._keyExtractor}
				renderItem={this._renderItem}	/>
		)
	}
}

const mapStateToProps = state => {
	return {
		content: state.content
	}
}

export default connect(mapStateToProps)(MainList)