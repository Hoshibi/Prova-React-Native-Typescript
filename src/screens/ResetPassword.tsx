import React from 'react';

import FormAuthContainer from '../components/FormAuthContainer/index'
import Input from '../components/Input';

export function ResetPassword({navigation}: any) {

    function onBack() {
        navigation.goBack()
    }

    function onSend() {
        navigation.navigate('ChangePassword')
    }

    return (
        <FormAuthContainer title='Reset password' btnGreenTitle='Send link' btnGrayTitle='Back' back={true} onPressBtnGreen={onSend} onPressBtnGray={onBack}>
            <Input dataCy="email-input" keyboardType='email-address' placeholder = "Email" autoCapitalize='none'/>
        </FormAuthContainer>
    );
}