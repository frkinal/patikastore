import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 7,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.2,
  },
  image: {
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
    margin: 5,
  },
  title: {
    fontWight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  price: {
    fontSize: 16,
  },
  inner_container: {
    padding: 5,
  },
  stock:{
    color:'red',
    fontWeight:'bold',
    fontSize:20,
  }
});
