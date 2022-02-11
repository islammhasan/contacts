import React, {useEffect, useState} from 'react';
import {Text, View, PermissionsAndroid} from 'react-native';
import {Container} from '../../components/Container';
import Contacts from 'react-native-contacts';
import {styles} from './styles';

export const Home = () => {
  const [contacts, setContacts] = useState([]);
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
            console.log(contacts[0]);
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

  return (
    <Container>
      <Text style={styles.text}>
        {contacts.length > 0 ? contacts[0].displayName : 'Just a text'}
      </Text>
    </Container>
  );
};
