import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const Add = props => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        {/* close */}
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{alignItems: 'flex-end', marginRight: 25, bottom: 10}}>
          <AntDesign name="closecircleo" size={45} color="#FFC7C7" />
        </TouchableOpacity>
        {/* input */}
        {/* date */}
        {/* alarm */}
        <View style={{bottom: 20, marginLeft: 30}}>
          <TextInput
            style={{
              width: '80%',
              // backgroundColor: 'black',
              // textAlign: 'center',
              fontSize: 20,
              color: '#533E85',
              marginBottom: 10,
            }}
            placeholder="New Task"
          />
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                borderRadius: 15,
                padding: 5,
              }}>
              <AntDesign name="calendar" size={30} color="#FFC7C7" />
              <Text
                style={{
                  color: '#533E85',
                  fontWeight: 'bold',
                }}>
                Today
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                borderRadius: 15,
                padding: 5,
                marginLeft: 5,
              }}>
              <MaterialIcons name="alarm" size={30} color="#FFC7C7" />
            </View>
          </View>
        </View>
        {/* type */}
        {/* priority */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 60,
          }}>
          <TouchableOpacity style={{marginRight: 20}}>
            <Entypo name="list" size={34} color="#FFC7C7" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="flag" size={30} color="#FFC7C7" />
          </TouchableOpacity>
        </View>
        {/* button */}
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{
              alignItems: 'flex-end',
              backgroundColor: '#FFC7C7',
              padding: 10,
              borderRadius: 20,
              marginRight: 15,
              bottom: 8,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: 'black'}}>
              Create New Task
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Add;
