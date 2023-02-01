import React, {memo, useEffect, useCallback, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {CurrencyItem} from './components/CurrencyItem';

export const CurrencyScreen = memo(() => {
  const [currency, setCurrency] = useState([]);

  const {navigate} = useNavigation();

  const fetchCurrency = useCallback(async () => {
    try {
      const response = await axios.get(
        'https://api.coinlore.net/api/tickers/?limit=50',
      );
      const {data} = response.data;
      setCurrency(data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    const intervalID = setIntervalX(fetchCurrency, 300, 5);

    return () => intervalID && clearInterval(intervalID);
  }, [fetchCurrency]);

  const onPress = useCallback(
    (item) => () => navigate('SelectedCurrency', {currency: item}),
    [navigate],
  );

  const setIntervalX = useCallback((callback, delay, repetitions) => {
    let x = 0;
    const intervalID = setInterval(() => {
      callback();
      if (++x === repetitions) {
        clearInterval(intervalID);
      }
    }, delay);
    return intervalID;
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.welcomeText}>Welcome to Cryptocurrency</Text>
      <FlatList
        data={currency}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CurrencyItem currency={item} onPress={onPress} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#2A2A2D',
    marginBottom: 30,
  },
});
