import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {strings} from '../../strings';

export const ContactRow = props => {
  const {name, img, checked} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imgContainer}>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={img || images.avatar}
          />
        </View>
        <Text numberOfLines={1} style={styles.nameStyle}>
          {name || strings.defaultName}
        </Text>
      </View>
      <View style={[styles.checker, checked && styles.checked]} />
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
  },
  img: {
    width: 30,
  },
  nameStyle: {
    color: colors.black,
    fontSize: 16,
    flex: 1,
    marginEnd: 10,
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
