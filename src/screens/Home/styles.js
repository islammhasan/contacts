import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export const styles = StyleSheet.create({
  searchbarStyle: {
    marginVertical: 10,
  },
  contactsListStyle: {
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  topListContainer: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
  },
  horizontalContactsListStyle: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  listSeparator: {
    height: 10,
  },
  horizontalListSeparator: {
    width: 10,
  },
  headerIconStyle: {
    marginEnd: 10,
  },
  addtofavBtn: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
    borderRadius: 5,
  },
});
