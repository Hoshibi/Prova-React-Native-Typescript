import React, { useState } from 'react';
import { isValidEmail } from '@shared/helpers/isValidEmail';
import authServices from '@shared/services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FormAuthContainer, Input, ResetPasswordLink } from '@components/index';

export function Login({navigation}: any) {

  function onSignUp() {
    navigation.navigate('Registration')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Input Change Handler
  const emailChangeHandler = (text:string) => {
    setEmail(text);
  };

  const passwordChangeHandler = (text:string) => {
    setPassword(text);
  };

  //Submit Login Handler
  const submitHandler = async (event: any) => {
    event.preventDefault();

    var errorMessage = "";

    if(email.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
    if(password.trim().length === 0) { errorMessage='Campo password vazio! Insira uma senha' }
    if(email.trim().length === 0 && password.trim().length === 0) { errorMessage='Todos os campos vazios! Insira os dados' }
    if(!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0) { errorMessage='Insira um email válido. Exemplo: exemplo@luby.com.br' }

    if(!!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0) { 
      var body = {email: email, password: password}
      try {
        const res = await authServices().loginUser(body);
        AsyncStorage.setItem('token',res.data.token.token);
        navigation.navigate('Logged');
        return res
      }catch (error: any) {
        if(error.status === 401){
          console.log("Email e/ou senhas incorretas")
        }
      }
    }else{
      console.log(errorMessage)
    }
  };

  return (
    <FormAuthContainer title='Authentication' btnGreenTitle='Log In' btnGrayTitle='Sign Up' back={false} onPressBtnGreen={submitHandler} onPressBtnGray={onSignUp}>
      <Input dataCy="email-input" keyboardType='email-address' placeholder = "Email" autoCapitalize='none' onChange={emailChangeHandler}/>
      <Input dataCy="password-input" keyboardType='default' placeholder = "Senha" autoCapitalize='none' onChange={passwordChangeHandler}/>
      <ResetPasswordLink onPress={() => {navigation.navigate('ResetPassword')}}/>
    </FormAuthContainer>
  );
}