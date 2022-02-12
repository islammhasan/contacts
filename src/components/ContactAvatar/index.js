import React from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {strings} from '../../strings';

export const ContactAvatar = props => {
  const {name, img} = props;

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          resizeMode="contain"
          style={[styles.img, img && styles.fullImage]}
          source={img ? {uri: img} : images.avatar}
        />
      </View>
      <Text numberOfLines={1} style={styles.name}>
        {name || strings.defaultName}
      </Text>
      <TouchableOpacity
        {...props}
        activeOpacity={0.8}
        style={styles.closeContainer}>
        <Text numberOfLines={1} style={styles.close}>
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 60,
  },
  name: {
    fontSize: 14,
    color: colors.black,
    width: 60,
    textAlign: 'center',
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    overflow: 'hidden',
  },
  img: {
    width: 30,
  },
  fullImage: {
    width: 60,
    height: 60,
  },
  closeContainer: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: colors.darkgray,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    end: 0,
  },
  close: {
    color: colors.white,
  },
});
