import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {colors, images} from '../../assets';

export const HeaderIcon = props => {
  const {img, style} = props;
  const count = useSelector(state => state.main.favorites.length);
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
      {count > 0 && (
        <View style={styles.counterContainer}>
          <Text style={styles.counterTxt}>{count <= 10 ? count : '+10'}</Text>
        </View>
      )}
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
  counterContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    position: 'absolute',
    top: 0,
    start: 0,
  },
  counterTxt: {
    fontSize: 12,
    color: colors.white,
  },
});
