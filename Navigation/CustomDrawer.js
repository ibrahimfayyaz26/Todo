import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default CustomDrawer = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={{flexL: 1, paddingHorizontal: 10}}>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => navigation.closeDrawer()}>
          <AntDesign name="close" size={30} color="#533E85" />
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <Image
            source={require('../Assets/pic/pic.jpg')}
            style={{
              width: 70,
              height: 70,
              resizeMode: 'cover',
              borderRadius: 20,
            }}
          />
          <View style={{marginLeft: 5, justifyContent: 'center'}}>
            <Text style={{color: '#533E85', fontSize: 19, fontWeight: 'bold'}}>
              Ibrahim
            </Text>
            <Text style={{color: '#533E85', fontSize: 12}}>
              View your profile
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home'), navigation.closeDrawer();
            }}
            style={{
              backgroundColor: '#E6E6E6',
              width: '100%',
              height: 35,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#1C658C',
              elevation: 12,
              shadowRadius: 15,
              marginBottom: 10,
              flexDirection: 'row',

              flexDirection: 'row',
            }}>
            <AntDesign
              name="home"
              size={20}
              color="#533E85"
              style={{marginRight: 5}}
            />
            <Text style={{color: '#533E85', fontSize: 18, fontWeight: 'bold'}}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Add'), navigation.closeDrawer();
            }}
            style={{
              backgroundColor: '#E6E6E6',
              width: '100%',
              height: 35,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#1C658C',
              elevation: 12,
              shadowRadius: 15,
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <FontAwesome5
              name="tasks"
              size={20}
              color="#533E85"
              style={{marginRight: 5}}
            />
            <Text style={{color: '#533E85', fontSize: 18, fontWeight: 'bold'}}>
              Create
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search'), navigation.closeDrawer();
            }}
            style={{
              backgroundColor: '#E6E6E6',
              width: '100%',
              height: 35,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#1C658C',
              elevation: 12,
              shadowRadius: 15,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <FontAwesome5
              name="search"
              size={18}
              color="#533E85"
              style={{marginRight: 5}}
            />
            <Text style={{color: '#533E85', fontSize: 18, fontWeight: 'bold'}}>
              Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E6E6E6',
              width: '100%',
              height: 35,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#1C658C',
              elevation: 12,
              shadowRadius: 15,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <MaterialCommunityIcons
              name="account-heart"
              size={24}
              color="#533E85"
              style={{marginRight: 5}}
            />
            <Text style={{color: '#533E85', fontSize: 18, fontWeight: 'bold'}}>
              Friends
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E6E6E6',
              width: '100%',
              height: 35,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#1C658C',
              elevation: 12,
              shadowRadius: 15,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <MaterialCommunityIcons
              name="account"
              size={24}
              color="#533E85"
              style={{marginRight: 5}}
            />
            <Text style={{color: '#533E85', fontSize: 18, fontWeight: 'bold'}}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              width: '80%',
              backgroundColor: 'black',
              alignSelf: 'center',
              height: 0.5,
              marginVertical: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CatTasks'), navigation.closeDrawer();
            }}
            style={{
              backgroundColor: '#533E85',
              width: '100%',
              height: 35,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#1C658C',
              elevation: 12,
              shadowRadius: 15,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <Text style={{color: '#E6E6E6', fontSize: 18, fontWeight: 'bold'}}>
              Personal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CatTasks'), navigation.closeDrawer();
            }}
            style={{
              backgroundColor: '#533E85',
              width: '100%',
              height: 35,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#1C658C',
              elevation: 12,
              shadowRadius: 15,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <Text style={{color: '#E6E6E6', fontSize: 18, fontWeight: 'bold'}}>
              Business
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CatTasks'), navigation.closeDrawer();
            }}
            style={{
              backgroundColor: '#533E85',
              width: '100%',
              height: 35,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#1C658C',
              elevation: 12,
              shadowRadius: 15,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <Text style={{color: '#E6E6E6', fontSize: 18, fontWeight: 'bold'}}>
              Team
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{height: '34%', justifyContent: 'flex-end', marginLeft: 5}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
