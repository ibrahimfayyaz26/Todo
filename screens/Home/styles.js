import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8785A2',
    flex: 1,
    paddingBottom: 270,
  },
  welcomeText: {
    color: '#533E85',
    fontFamily: 'Abel-Regular',
    fontSize: 30,
    left: 30,
    marginTop: 35,
    marginBottom: 20,
  },
  cat: {
    marginBottom: 5,
    marginTop: 10,
  },
  catText: {
    color: '#FFC7C7',
    fontFamily: 'Abel-Regular',
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 5,
  },
  task: {
    marginTop: 35,
    marginLeft: 10,
    marginBottom: 5,
  },
  taskText: {
    color: '#FFC7C7',
    fontFamily: 'Abel-Regular',
    fontSize: 17,
    marginBottom: 5,
  },
  add: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#533E85',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 20,
    bottom: 70,
    elevation: 15,
  },
});

export default styles;
