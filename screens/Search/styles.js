import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8785A2',
    flex: 1,
    margin: 5,
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
  },
  textInput: {
    marginLeft: 10,
    fontSize: 18,
    width: '80%',
    color: '#FFC7C7',
    fontFamily: 'Abel-Regular',
  },
});

export default styles;
