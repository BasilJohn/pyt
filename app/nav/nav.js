import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/Home/home';
import SearchScreen from '../screens/Search/search';

import MenuDrawer from '../components/menuDrawer';

const WIDTH = Dimensions.get("window").width;
const DrawerConfig = {
    drawerWidth: WIDTH 
}
const DrawerNavigator = createDrawerNavigator({

    Home: {
        screen: HomeScreen
    },
    Search: {
        screen: SearchScreen
    },


}, {
        contentComponent: MenuDrawer,
    },
    DrawerConfig);

export default createAppContainer(DrawerNavigator)