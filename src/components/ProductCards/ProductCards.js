import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from './ProductCards.style';

const ProductCards = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:product.imgURL}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.stock}>
          {' '}
          {product.inStock ? null : 'STOKTA YOK'}{' '}
        </Text>
      </View>
    </View>
  );
};

export default ProductCards;
