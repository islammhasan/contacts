import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {strings} from '../../strings';

export const PrimaryButton = props => {
  const {title, style} = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[styles.container, style]}>
      <Text style={styles.titleStyle} numberOfLines={1}>
        {title || strings.defaultTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleStyle: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
});
