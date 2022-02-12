import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {Container, PrimaryButton, PrimaryInput} from '../../components';
import {strings} from '../../strings';
import {styles} from './styles';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <PrimaryInput
          onChangeText={username => setUsername(username)}
          placeholder={strings.username}
        />
        <PrimaryInput
          onChangeText={password => setPassword(password)}
          placeholder={strings.password}
        />
        <PrimaryButton
          onPress={() => alert('Sign up pressed!')}
          style={styles.btnStyle}
          title={strings.signup.toUpperCase()}
        />
        <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => alert('Login pressed!')}
          activeOpacity={0.8}>
          <Text numberOfLines={1} style={styles.haveAcc}>
            {strings.haveAcc + ' '}
            <Text numberOfLines={1} style={styles.loginTxt}>
              {strings.loginTxt}
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};
