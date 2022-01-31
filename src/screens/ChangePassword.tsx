import React from 'react';

import FormAuthContainer from '../components/FormAuthContainer/index'
import Input from '../components/Input';

export function ChangePassword({navigation}: any) {

    function onBack() {
        navigation.goBack()
    }

    return (
        <FormAuthContainer title='Change password' btnGreenTitle='Change' btnGrayTitle='Back' back={true} onPressBtnGray={onBack}>
            <Input dataCy="password-input" keyboardType='default' placeholder = "Senha" autoCapitalize='none'/>
        </FormAuthContainer>
    );
    
}