import React, {useState, useLayoutEffect} from 'react';
import {View, FlatList} from 'react-native';
import {
  Container,
  ContactRow,
  ContactAvatar,
  SearchBar,
  HeaderIcon,
  PrimaryButton,
} from '../../components/';
import {styles} from './styles';
import {strings} from '../../strings';
import {useDispatch, useSelector} from 'react-redux';
import {useContacts} from '../../redux/main';

export const Home = ({navigation}) => {
  const contacts = useSelector(state => state.main.contacts);
  const [data, setData] = useState(contacts);
  const [selectedContacts, setSelectedContact] = useState([]);
  const dispatch = useDispatch();
  const {addToFav} = useContacts();
  console.log('contacts', contacts.length);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: FavIcon,
    });
  });

  const FavIcon = () => {
    return <HeaderIcon style={styles.headerIconStyle} />;
  };

  const updateFav = items => {
    dispatch(addToFav(items));
    setSelectedContact([]);
    data.map(item => {
      item.selected = false;
    });
    alert('Selected contacts has been added to your favorites');
  };

  const updateList = itemSelected => {
    const newData = data.map(item => {
      if (item.recordID == itemSelected.recordID) {
        return {
          ...item,
          selected: !item.selected,
        };
      } else {
        return {
          ...item,
          selected: item.selected,
        };
      }
    });
    setData(newData);
    const selectedData = newData.filter(d => d.selected == true);
    setSelectedContact(selectedData);
  };

  const renderItem = ({item}) => {
    return (
      <ContactRow
        name={item?.displayName}
        img={item?.hasThumbnail && item?.thumbnailPath}
        phone={item?.phoneNumbers[0]?.number}
        checked={item?.selected}
        onPress={() => updateList(item)}
      />
    );
  };

  const listSeparator = () => {
    return <View style={styles.listSeparator} />;
  };

  const renderHorizontalItem = ({item}) => {
    return (
      <ContactAvatar
        name={item.displayName}
        img={item?.hasThumbnail && item.thumbnailPath}
        onPress={() => updateList(item)}
      />
    );
  };

  const horizontalListSeparator = () => {
    return <View style={styles.horizontalListSeparator} />;
  };

  return (
    <Container>
      <SearchBar containerStyle={styles.searchbarStyle} />
      {selectedContacts.length > 0 && (
        <View style={styles.topListContainer}>
          <FlatList
            data={selectedContacts}
            horizontal
            contentContainerStyle={styles.horizontalContactsListStyle}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.recordID}
            renderItem={renderHorizontalItem}
            ItemSeparatorComponent={horizontalListSeparator}
          />
        </View>
      )}
      <FlatList
        data={data}
        contentContainerStyle={styles.contactsListStyle}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.recordID}
        renderItem={renderItem}
        ItemSeparatorComponent={listSeparator}
      />
      {selectedContacts.length > 0 && (
        <PrimaryButton
          style={styles.addtofavBtn}
          title={strings.addtofav.toUpperCase()}
          onPress={() => updateFav(selectedContacts)}
        />
      )}
    </Container>
  );
};
