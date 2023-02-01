import React, {memo} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

export const SelectedCurrencyScreen = memo(() => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.currencyText}>
        {route.params.currency.symbol}/ {`${route.params.currency.price_usd}$`}
      </Text>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  currencyText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#2A2A2D',
    marginBottom: 30,
  },
});
