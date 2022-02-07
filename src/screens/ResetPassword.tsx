import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { isValidEmail } from '@shared/helpers/isValidEmail';
import authServices from '@shared/services/auth';

import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

import { FormAuthContainer, Input } from '@components/index';

export function ResetPassword({navigation}: any) {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const emailChangeHandler = (text: string) => {
        setEmail(text);
    };

    function onBack() {
        navigation.goBack()
    }

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          setEmail("");
        });
        return unsubscribe;
    }, [navigation]);

    const submitHandler = async (event: any) => {
        event.preventDefault();
    
        var errorMessage = "";
        if(email.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
        if(!isValidEmail(email) && email.trim().length > 0 ) { errorMessage='Insira um email válido. Ex: exemplo@luby.com.br' }
        
        if(!!isValidEmail(email) && email.trim().length > 0 ) { 
          var body = {email: email}
          try {
            const res = await authServices().resetPassword(body);
            Toast.show({ type: 'success', text1: 'Insir uma senha nova!'});
            dispatch(authActions.getTokenPassword(res.data.token));
            setEmail('');
            navigation.navigate('ChangePassword');
            return res
          } catch (error: any) {
            if(error.status === 404){
                Toast.show({ type: 'error', text1: "Não há cadastro com esse e-mail"});
            }
          }
        }else{
            Toast.show({ type: 'error', text1: errorMessage});
        }
    }

    return (
        <FormAuthContainer title='Reset password' btnGreenTitle='Send link' btnGrayTitle='Back' back={true} onPressBtnGreen={submitHandler} onPressBtnGray={onBack}>
            <Input dataCy="email-input" secureTextEntry={false} keyboardType='email-address' placeholder = "Email" autoCapitalize='none' onChange={emailChangeHandler}/>
        </FormAuthContainer>
    );
}