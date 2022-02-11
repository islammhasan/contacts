import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import {colors, images} from '../../assets/';

export const SearchBar = props => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.icon} source={images.search} />
      <TextInput
        placeholderTextColor={colors.gray}
        placeholder="Search"
        style={styles.inputStyle}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  icon: {
    width: 30,
  },
  inputStyle: {
    fontSize: 16,
    color: colors.black,
    flex: 1,
  },
});
