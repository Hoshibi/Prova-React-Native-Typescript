import React from 'react';

import { FormAuthContainer, Input } from '@components/index';

export function Registration({navigation}: any) {

    function onBack() {
        navigation.goBack()
    }

    return (
        <FormAuthContainer title='Registration' btnGreenTitle='Register' btnGrayTitle='Back' back={true} onPressBtnGray={onBack}>
            <Input dataCy="name-input" keyboardType='default' placeholder = "Name" autoCapitalize='words'/>
            <Input dataCy="email-input" keyboardType='email-address' placeholder = "Email" autoCapitalize='none'/>
            <Input dataCy="password-input" keyboardType='default' placeholder = "Senha" autoCapitalize='none'/>
        </FormAuthContainer>
    );
}