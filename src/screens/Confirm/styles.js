import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyle: {
    fontSize: 22,
    color: colors.darkgray,
  },
  otpContainer: {
    marginHorizontal: 30,
    height: 200,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: colors.gray,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: colors.blue,
    borderColor: colors.gray,
    fontSize: 20,
  },

  underlineStyleHighLighted: {
    borderColor: colors.blue,
  },
});
