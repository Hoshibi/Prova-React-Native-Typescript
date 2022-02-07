import React from 'react';

import { InputStyle } from './styles'

interface PropsType {
    dataCy?: string;
    keyboardType: any;
    placeholder: string;
    autoCapitalize: any;
    onChange: (text:string) => void;
    secureTextEntry: boolean;
}

const Input: React.FC<PropsType> = ({ dataCy, keyboardType, placeholder, autoCapitalize, onChange, secureTextEntry}) => {
    return (
        <>
            <InputStyle data-cy={dataCy} secureTextEntry={secureTextEntry} keyboardType={keyboardType} placeholder={placeholder} autoCapitalize={autoCapitalize} onChangeText={onChange}/>
        </>
    );
};

export default Input;