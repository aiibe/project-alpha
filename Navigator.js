import React, {PureComponent} from 'react';
import {createStackNavigator} from 'react-navigation';

// Screens
import MainScreen from './src/screens/Main';
import ProductScreen from './src/screens/Product';


const Root = createStackNavigator(
{
	Home: MainScreen,
	Product: ProductScreen
},
{
	initialRouteName: "Home"
})

export default Root