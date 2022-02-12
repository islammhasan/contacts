import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {strings} from '../../strings';

export const PrimaryInput = props => {
  const {placeholder, containerStyle, inputStyle, keyboardType} = props;
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <TextInput
        placeholderTextColor={colors.gray}
        placeholder={placeholder || strings.defaultPlaceholder}
        style={[styles.inputStyle, inputStyle]}
        keyboardType={keyboardType || 'default'}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  inputStyle: {
    fontSize: 16,
    color: colors.darkgray,
    flex: 1,
  },
});
