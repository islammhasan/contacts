import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {strings} from '../../strings';

export const ContactRow = props => {
  const {name, img, checked, phone, isFav} = props;
  return (
    <TouchableOpacity {...props} activeOpacity={0.8} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imgContainer}>
          <Image
            resizeMode="contain"
            style={[styles.img, img && styles.fullImage]}
            source={img ? {uri: img} : images.avatar}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} style={styles.nameStyle}>
            {name || strings.defaultName}
          </Text>
          <Text numberOfLines={1} style={styles.phoneStyle}>
            {phone || strings.defaultNumber}
          </Text>
        </View>
      </View>
      {!isFav && <View style={[styles.checker, checked && styles.checked]} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10,
    overflow: 'hidden',
  },
  infoContainer: {
    flex: 1,
    marginEnd: 10,
    justifyContent: 'space-around',
  },
  img: {
    width: 30,
  },
  fullImage: {
    width: 60,
    height: 60,
  },
  nameStyle: {
    color: colors.black,
    fontSize: 16,
    textAlign: 'left',
  },
  phoneStyle: {
    color: colors.gray,
    fontSize: 14,
    textAlign: 'left',
  },
  checker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  checked: {
    borderColor: colors.blue,
    backgroundColor: colors.blue,
  },
});
