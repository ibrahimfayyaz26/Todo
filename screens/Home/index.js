import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Card from '../../Components/Card';
import Categories from '../../Components/Categories';
import Entypo from 'react-native-vector-icons/Entypo';
import category from '../../Assets/data/category.json';
import tasks from '../../Assets/data/tasks.json';

const Home = props => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.welcomeText}>What's up, Ibrahim!</Text>
        <View style={styles.cat}>
          <Text style={styles.catText}>CATEGORIES</Text>
          <FlatList
            data={category}
            keyExtractor={i => i.id}
            renderItem={({item}) => (
              <Categories navigation={props.navigation} cat={item} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>TODAY'S TASKS</Text>
          {/* <FlatList
          data={[1, 2, 3, 5, 6, 7, 88, 9]}
          keyExtractor={i => i}
          renderItem={() => <Card />}
          showsVerticalScrollIndicator={false}
        /> */}
          {tasks.map(i => (
            <Card key={i.id} task={i} />
          ))}
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Add')}
          style={styles.add}>
          <Entypo name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
