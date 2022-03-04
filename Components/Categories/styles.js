import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    width: 180,
    height: 100,
    borderRadius: 20,
    justifyContent: 'space-around',
    marginLeft: 10,
    elevation: 10,
  },
  category: {
    color: '#8785A2',
    fontFamily: 'Abel-Regular',
    fontSize: 23,
  },
  task: {
    color: '#051367',
    fontFamily: 'Abel-Regular',
    fontSize: 13,
    // marginBottom: 8,
  },
  progress: {
    width: '95%',
  },
});

export default styles;
