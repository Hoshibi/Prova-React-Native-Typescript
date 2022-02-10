import React, { useState } from 'react';
import { isValidEmail } from '@shared/helpers/isValidEmail';
import authServices from '@shared/services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'

import { FormAuthContainer, Input, ResetPasswordLink } from '@components/index';

export function Login({navigation}: any) {

  function onSignUp() {
    navigation.push('Registration')
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

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setEmail("");
      setPassword("");
    });
    return unsubscribe;
  }, [navigation]);
  
  //Submit Login Handler
  const submitHandler = async (event: any) => {
    event.preventDefault();

    var errorMessage = "";

    if(email.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
    if(password.trim().length === 0) { errorMessage='Campo password vazio! Insira uma senha' }
    if(email.trim().length === 0 && password.trim().length === 0) { errorMessage='Todos os campos vazios! Insira os dados' }
    if(!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0) { errorMessage='Insira um email válido. Ex: exemplo@luby.com.br' }

    if(!!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0) { 
      var body = {email: email, password: password}
      try {
        const res = await authServices().loginUser(body);
        await AsyncStorage.setItem('token',res.data.token.token);
        navigation.push("Logged");
        return res
      }catch (error: any) {
        if(error.status === 401){
          Toast.show({ type: 'error', text1: 'E-mail e/ou senhas incorretas!' });
        }
      }
    }else{
      Toast.show({ type: 'error', text1: errorMessage});
    }
  };

  return (
    <FormAuthContainer title='Authentication' btnGreenTitle='Log In' btnGrayTitle='Sign Up' back={false} onPressBtnGreen={submitHandler} onPressBtnGray={onSignUp}>
      <Input dataCy="email-input" secureTextEntry={false} keyboardType='email-address' placeholder = "Email" autoCapitalize='none' onChange={emailChangeHandler}/>
      <Input dataCy="password-input" secureTextEntry={true} keyboardType='default' placeholder = "Password" autoCapitalize='none' onChange={passwordChangeHandler}/>
      <ResetPasswordLink onPress={() => {navigation.push('ResetPassword')}}/>
    </FormAuthContainer>
  );
}