import React from 'react';

import { FormAuthContainer, Input, ResetPasswordLink } from '../components';

export function Login({navigation}: any) {

  function onSignUp() {
    navigation.navigate('Registration')
  }

  function onLogged() {
    navigation.navigate('Logged')
  }

  return (
    <FormAuthContainer title='Authentication' btnGreenTitle='Log In' btnGrayTitle='Sign Up' back={false} onPressBtnGreen={onLogged} onPressBtnGray={onSignUp}>
      <Input dataCy="email-input" keyboardType='email-address' placeholder = "Email" autoCapitalize='none'/>
      <Input dataCy="password-input" keyboardType='default' placeholder = "Senha" autoCapitalize='none'/>
      <ResetPasswordLink onPress={() => {navigation.navigate('ResetPassword')}}/>
    </FormAuthContainer>
  );
}