import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import {View} from 'react-native';
import CustomDrawer from './CustomDrawer';
import Add from '../screens/Add';
import CatTasks from '../screens/CatTasks';
import Search from '../screens/Search';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#8785A2'}}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          headerShown: false,
          sceneContainerStyle: {backgroundColor: 'transparent'},
          drawerStyle: {
            flex: 1,
            width: '60%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
        }}
        initialRouteName="Home"
        drawerContent={props => {
          return <CustomDrawer navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="Home">
          {props => <Home {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Add">{props => <Add {...props} />}</Drawer.Screen>
        <Drawer.Screen name="CatTasks">
          {props => <CatTasks {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Search">
          {props => <Search {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNav;
