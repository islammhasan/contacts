import React from 'react';
import {Text, ScrollView} from 'react-native';
import {Container} from '../../components';
import {styles} from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useDispatch} from 'react-redux';
import {useReg} from '../../redux/main';

export const Confirm = () => {
  const {confirm} = useReg();
  const dispatch = useDispatch();

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.txtStyle}>Enter your code, please.</Text>
        <OTPInputView
          style={styles.otpContainer}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => dispatch(confirm(code))}
        />
      </ScrollView>
    </Container>
  );
};
