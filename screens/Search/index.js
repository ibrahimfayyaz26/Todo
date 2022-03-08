import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import recent from '../../Assets/data/recent.json';

const Search = () => {
  const [active, setActive] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Find Friends"
          style={styles.textInput}
          onFocus={() => setActive(true)}
          onEndEditing={() => setActive(false)}
        />
        <EvilIcons name="search" size={40} color="#533E85" />
      </View>
      {active ? (
        <View>
          <FlatList
            data={recent}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <EvilIcons name="search" size={35} color="#533E85" />

                    <Text
                      style={{
                        fontSize: 19,
                        color: '#FFC7C7',
                        fontFamily: 'Abel-Regular',
                        fontWeight: 'bold',
                        marginLeft: 10,
                      }}>
                      {item.recent}
                    </Text>
                  </View>
                  <AntDesign
                    style={{marginRight: 5}}
                    name="select1"
                    size={25}
                    color="#533E85"
                  />
                </View>
              );
            }}
          />
        </View>
      ) : (
        <View>
          <FlatList
            data={recent}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="close" size={25} color="#533E85" />
                  <Text
                    style={{
                      fontSize: 19,
                      color: '#FFC7C7',
                      fontFamily: 'Abel-Regular',
                      fontWeight: 'bold',
                      marginLeft: 10,
                    }}>
                    {item.recent}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Search;
