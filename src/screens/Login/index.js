import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {Container, PrimaryButton, PrimaryInput} from '../../components';
import {strings} from '../../strings';
import {styles} from './styles';

export const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
