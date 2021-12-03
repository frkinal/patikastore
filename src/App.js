import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  View,
} from 'react-native';
import data_products from './products.json';
import ProductCards from './components/ProductCards/ProductCards';

const App = () => {
  const num_columns = 2;
  const renderProducts = ({item}) => <ProductCards product={item} />;
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ara..."
        keyboardType="default"
      />
        <FlatList
          data={data_products}
          renderItem={renderProducts}
          numColumns={num_columns}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    flexWrap:'wrap'
  },
  header_text: {
    fontWeight: 'bold',
    margin: 12,
    fontSize: 50,
    color: '#800080',
  },
  input: {
    height: 58,
    margin: 12,
    backgroundColor: '#ECEFF1',
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
