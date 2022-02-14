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
import {useContacts} from '../../redux/main';

export const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    loadContacts();
  }, []);

  const {getContacts} = useContacts();
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
    if (username != '' && password != '') {
      navigation.navigate('Home');
    } else {
      alert('Please fill all fields!');
    }
  };
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <PrimaryInput
          onChangeText={username => setUsername(username)}
          placeholder={strings.username}
        />
        <PrimaryInput
          secureTextEntry
          onChangeText={password => setPassword(password)}
          placeholder={strings.password}
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
