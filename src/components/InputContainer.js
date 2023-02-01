import React from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';

export const InputContainer = ({
  error,
  children,
  label,
  backgroundColor,
  style,
}) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <Animated.View
        style={[
          styles.animatedTextInputWrapper,
          {backgroundColor: backgroundColor},
          !!error && styles.errorTextInputWrapper,
        ]}>
        <View style={[styles.textInputWrapper]}>{children}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
    fontSize: 13,
    lineHeight: 20,
    color: '#585B65',
  },
  animatedTextInputWrapper: {
    padding: 1,
    backgroundColor: 'rgba(10, 13, 20, 0.08)',
    borderRadius: 8,
  },
  textInputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorTextInputWrapper: {
    backgroundColor: '#E41E2D',
  },
  textInput: {
    padding: 16,
    fontSize: 15,
    fontWeight: '500',
    color: '#2A2A2D',
  },
  error: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 16,
    color: '#E41E2D',
  },
  disabledInputWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  spinner: {
    marginRight: 20,
  },
  nestedLabel: {
    marginBottom: 4,
    fontSize: 13,
    lineHeight: 20,
    color: '#909096',
  },
});
