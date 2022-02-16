import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Container, PrimaryButton, PrimaryInput} from '../../components';
import {useReg} from '../../redux/main';
import {strings} from '../../strings';
import {styles} from './styles';

export const Signup = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const {signIn} = useReg();
  const dispatch = useDispatch();

  const signup = () => {
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
          onPress={signup}
          style={styles.btnStyle}
          title={strings.signup.toUpperCase()}
        />
        <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => navigation.navigate('Login')}
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
