import React from 'react';

import { FormAuthContainer, Input } from '../components';

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