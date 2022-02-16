import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {Container, PrimaryButton, PrimaryInput} from '../../components';
import {strings} from '../../strings';
import {styles} from './styles';
import Contacts from 'react-native-contacts';
import {useDispatch} from 'react-redux';
import {useContacts, useReg} from '../../redux/main';

export const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    loadContacts();
  }, []);

  const {getContacts} = useContacts();
  const {signIn} = useReg();
  const dispatch = useDispatch();

  const loadContacts = async () => {
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
            dispatch(getContacts(contacts));
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

  const login = () => {
    if (phoneNumber != '') {
      dispatch(signIn(phoneNumber));
      navigation.navigate('Confirm');
    } else {
      alert('Please fill all fields!');
    }
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <PrimaryInput
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          placeholder={strings.phoneNo}
          keyboardType={'phone-pad'}
        />
        <PrimaryButton
          onPress={login}
          style={styles.btnStyle}
          title={strings.login.toUpperCase()}
        />
        <TouchableOpacity
          style={styles.signupContainer}
          onPress={() => navigation.navigate('Signup')}
          activeOpacity={0.8}>
          <Text numberOfLines={1} style={styles.noAccTxt}>
            {strings.noAccTxt + ' '}
            <Text numberOfLines={1} style={styles.signupTxt}>
              {strings.signupTxt}
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};
