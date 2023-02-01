import React, {memo, useCallback, useRef, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {width} from '../../constants/Layout';
import {InputContainer} from '../../components/InputContainer';

export const LoginScreen = memo(() => {
  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState('');

  const loginAnimatedValue = useRef(new Animated.Value(0)).current;
  const {navigate} = useNavigation();

  const onSubmitEditing = useCallback(() => {
    if (login.length === 0) {
      setLoginError("Field can't be empty");
      return;
    }
    navigate('Currency');
    setLoginError('');
  }, [login, navigate]);

  const getBgColor = useCallback((animatedValue) => {
    return animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#C8C8CD', '#12C5F1'],
    });
  }, []);

  const onFocus = useCallback((animatedValue) => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  const onBlur = useCallback((animatedValue) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView style={styles.keyboardContainer}>
        <InputContainer
          error={loginError}
          label="Login"
          style={styles.loginContainer}
          backgroundColor={getBgColor(loginAnimatedValue)}>
          <TextInput
            blurOnSubmit={false}
            placeholder="Enter Login"
            style={styles.textInput}
            onFocus={() => onFocus(loginAnimatedValue)}
            onBlur={() => onBlur(loginAnimatedValue)}
            value={login}
            onChangeText={setLogin}
            keyboardAppearance="light"
            returnKeyType="done"
            onSubmitEditing={onSubmitEditing}
          />
        </InputContainer>
      </KeyboardAvoidingView>
    </View>
  );
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardContainer: {
    flex: 1,
  },
  textInput: {
    padding: 16,
    fontSize: 15,
    fontWeight: '500',
    color: '#2A2A2D',
    width: width - 48,
  },
  loginContainer: {
    marginTop: 120,
    alignSelf: 'center',
    marginBottom: 24,
  },
});
