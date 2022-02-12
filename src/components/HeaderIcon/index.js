import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {images} from '../../assets';

export const HeaderIcon = props => {
  const {img, style} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, style]}
      {...props}>
      <Image
        resizeMode="contain"
        style={styles.imgStyle}
        source={img || images.heart}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 35,
    height: 35,
  },
});
