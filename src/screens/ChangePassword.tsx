import React, { useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import authServices from '@shared/services/auth';

import { FormAuthContainer, Input } from '@components/index';

export function ChangePassword({navigation}: any) {

    const token = useSelector((state: RootStateOrAny) => state.auth.token);

    const [senha, setSenha] = useState('');

    const senhaChangeHandler = (text: string) => {
        setSenha(text);
    };
    
    function onBack() {
        navigation.goBack()
    }

    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        setSenha("");
      });
      return unsubscribe;
    }, [navigation]);

    const submitHandler = async (event: any) => {
        event.preventDefault();
    
        var errorMessage = "";
        if(senha.trim().length === 0) { errorMessage='Campo senha vazio! Insira uma senha.' }
    
        if(senha.trim().length > 0 ) { 
          var body = {password: senha}
          try {
            const res = await authServices().changePassword(body,token);
              Toast.show({ type: 'success', text1: "Senha alterada com sucesso!"});
              setSenha('');
              navigation.navigate('Login');
            return res
          } catch (error: any) {
            Toast.show({ type: 'error', text1: error});
          }
        }else{
            Toast.show({ type: 'error', text1: errorMessage});
        }
      }

    return (
        <FormAuthContainer title='Change password' btnGreenTitle='Change' btnGrayTitle='Back' back={true} onPressBtnGreen={submitHandler} onPressBtnGray={onBack}>
            <Input dataCy="password-input" secureTextEntry={true} keyboardType='default' placeholder = "Senha" autoCapitalize='none' onChange={senhaChangeHandler}/>
        </FormAuthContainer>
    );
    
}