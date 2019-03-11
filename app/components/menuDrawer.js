import React, { Component } from "react"
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native"

import MenuItem from '../components/menuItem';

// const userData = {
//   profileUrl: 'https://s-media-cache-ak0.pinimg.com/736x/a3/e3/d6/a3e3d67e30105ca1688565e484370ab8--social-networks-harry-potter.jpg',
//   username: 'Emma',
//   email: 'ewatson@gryffindor.io'
// }


const menuData = [
  { icon: "ios-home", name: "HOME", screenName: "Home", key: 1 },
  { icon: "ios-search", name: "SEARCH", screenName: "Search", key: 2 },
  { icon: "ios-images", name: "IMAGE LIST", screenName: "Inventory", key: 3 }
]



class MenuDrawer extends Component {


  navigateToScreen = (screen) => {

    this.props.navigation.closeDrawer();
    this.props.navigation.navigate(screen, {
      userData: {}
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <FlatList
            data={menuData}
            renderItem={({ item }) =>
              <MenuItem
                navigation={this.props.navigation}
                screenName={item.screenName}
                icon={item.icon}
                name={item.name}
                key={item.key}
                onItemPress={() => this.navigateToScreen(item.screenName)}
              />
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32425B'
  },
  mainContainer: {

    paddingTop: 50
  },
  menuItem: {
    flexDirection: 'row'
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '300',
    margin: 15,
  }
})



export default MenuDrawer;