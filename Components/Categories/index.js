import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProgressBar} from 'react-native-paper';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Categories = ({cat, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CatTasks')}
      activeOpacity={0.9}>
      <LinearGradient colors={['#E3BEC6', '#EFDAD7']} style={styles.container}>
        <Text style={styles.task}>{cat.tasks} tasks</Text>
        <Text style={styles.category}>{cat.type}</Text>
        <View style={styles.progress}>
          <ProgressBar progress={cat.progress} color={'#8785A2'} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Categories;
