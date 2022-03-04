import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import Card from '../../Components/Card';
import tasks from '../../Assets/data/tasks.json';

const CatTasks = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={i => i.id}
        renderItem={({item}) => <Card task={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CatTasks;
