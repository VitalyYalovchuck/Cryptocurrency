import React, {memo} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const CurrencyItem = memo(({currency, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress(currency)}>
      <Text>{currency.name}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#909096',
  },
});
