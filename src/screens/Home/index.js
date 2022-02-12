import React, {useEffect, useState} from 'react';
import {View, FlatList, PermissionsAndroid} from 'react-native';
import {
  Container,
  ContactRow,
  ContactAvatar,
  SearchBar,
  PrimaryInput,
} from '../../components/';
import Contacts from 'react-native-contacts';
import {styles} from './styles';

export const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContact] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'Please accept bare mortal',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permission granted');
        try {
          await Contacts.getAll().then(contacts => {
            setContacts(contacts);
          });
        } catch (error) {
          console.log('error===>', error);
        }
      } else {
        console.log('Permission denied');
      }
    } catch (error) {
      console.log('caught error', error);
    }
  };

  const updateList = itemSelected => {
    const newData = contacts.map(item => {
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
    setContacts(newData);
    const selectedData = newData.filter(d => d.selected == true);
    setSelectedContact(selectedData);
  };

  const renderItem = ({item}) => {
    return (
      <ContactRow
        name={item?.displayName}
        img={item?.hasThumbnail && item.thumbnailPath}
        phone={item?.phoneNumbers[0].number}
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
        data={contacts}
        contentContainerStyle={styles.contactsListStyle}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.recordID}
        renderItem={renderItem}
        ItemSeparatorComponent={listSeparator}
      />
    </Container>
  );
};
