import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import styles from './styles';
import {CheckBox, Icon} from 'react-native-elements';

const Card = ({task}) => {
  const [check, setCheck] = useState(false);
  return (
    <LinearGradient colors={['#FFE2E2', '#EFDAD7']} style={styles.container}>
      <CheckBox center checked={check} onPress={() => setCheck(!check)} />
      <Text
        numberOfLines={2}
        style={[
          styles.text,
          {
            color:
              task.priority == 'high'
                ? 'red'
                : task.priority == 'medium'
                ? '#8785A2'
                : 'green',
          },
          check && {textDecorationLine: 'line-through', color: 'black'},
        ]}>
        {task.task}
      </Text>
    </LinearGradient>
  );
};

export default Card;
