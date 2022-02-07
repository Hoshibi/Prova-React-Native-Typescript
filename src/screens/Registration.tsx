import React, { useState } from 'react';
import Toast from 'react-native-toast-message'
import { isValidEmail } from '@shared/helpers/isValidEmail';
import userServices from '@shared/services/user';

import { FormAuthContainer, Input } from '@components/index';

export function Registration({navigation}: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const emailChangeHandler = (text:string) => {
        setEmail(text);
      };
    
    const passwordChangeHandler = (text:string) => {
        setPassword(text);
    };
    
    const nameChangeHandler = (text:string) => {
        setName(text);
    };

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          setEmail("");
          setPassword("");
          setName("");
        });
        return unsubscribe;
    }, [navigation]);

    //onBack Handler
    function onBack() {
        navigation.goBack();
    }

    //Submit Handler
    const submitHandler = async (event: any) => {
        event.preventDefault();

        let errorMessage = "";
        if(email.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
        if(password.trim().length === 0) { errorMessage='Campo password vazio! Insira uma senha' }
        if(name.trim().length === 0) { errorMessage='Campo name vazio! Insira um nome' }
        if(email.trim().length === 0 && password.trim().length === 0 && name.trim().length === 0) { errorMessage='Todos os campos vazios! Insira os dados' }
        if(!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0 && name.trim().length > 0) { 
        errorMessage='Insira um email válido. Ex: exemplo@luby.com.br' 
        }

        if(!!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0 && name.trim().length > 0) { 
        let body = { email: email, password: password, name: name } 
        try {
            const res = await userServices().createUser(body);
            Toast.show({ type: 'success', text1: 'Cadastro realiza com sucesso!' });
            setName('');
            setEmail('');
            setPassword('');
            navigation.navigate('Login');
            return res
        } catch (error: any) {
            if(error.status === 400){
            Toast.show({ type: 'error', text1: 'Já existe uma conta com esse Email !' }); 
            }
        }
        }else{
            Toast.show({ type: 'error', text1: errorMessage }); 
        }
    }

    return (
        <FormAuthContainer title='Registration' btnGreenTitle='Register' btnGrayTitle='Back' back={true} onPressBtnGreen={submitHandler} onPressBtnGray={onBack}>
            <Input dataCy="name-input" secureTextEntry={false} keyboardType='default' placeholder = "Name" autoCapitalize='words' onChange={nameChangeHandler}/>
            <Input dataCy="email-input" secureTextEntry={false} keyboardType='email-address' placeholder = "Email" autoCapitalize='none' onChange={emailChangeHandler}/>
            <Input dataCy="password-input" secureTextEntry={true} keyboardType='default' placeholder = "Password" autoCapitalize='none' onChange={passwordChangeHandler}/>
        </FormAuthContainer>
    );
}