import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Container, PrimaryButton, PrimaryInput} from '../../components';
import {strings} from '../../strings';
import {styles} from './styles';

export const Login = () => {
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
          onPress={() => alert('Login pressed!')}
          style={styles.btnStyle}
          title={strings.login.toUpperCase()}
        />
        <TouchableOpacity
          style={styles.signupContainer}
          onPress={() => alert('Sign up pressed!')}
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
