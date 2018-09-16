import {StyleSheet} from 'react-native';

export const Themes = {
	royale: {
		desire: "#e63946",
		honey: "#f1faee",
		lightblue: "#a8dadc",
		queenblue: "#457b9d",
		spacecadet: "#1d3557",
		white: "#fff",
		grey: "#e4e4e4"
	}
}

export const Styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: Themes.royale.white,
		paddingLeft: 15,
		paddingRight: 15,
		flexDirection: 'row'
	},
	card: {
		backgroundColor: Themes.royale.white,
		marginTop: 10,
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: Themes.royale.grey
	},
	smallAvatar: {
		width: 45,
		height: 45,
		borderRadius: 2,
		marginRight: 10,
		marginBottom: 5
	},
	title: {
		color: Themes.royale.queenblue,
		fontSize: 16,
		fontWeight: 'bold'
	},
	desc: {
		color: Themes.royale.queenblue,
		fontSize: 14
	}
})