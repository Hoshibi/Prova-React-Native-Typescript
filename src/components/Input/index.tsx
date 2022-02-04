import React from 'react';

import { InputStyle } from './styles'

interface PropsType {
    dataCy?: string;
    keyboardType: any;
    placeholder: string;
    autoCapitalize: any;
    onChange: (text:string) => void;
}

const Input: React.FC<PropsType> = ({ dataCy, keyboardType, placeholder, autoCapitalize, onChange}) => {
    return (
        <>
            <InputStyle data-cy={dataCy} keyboardType={keyboardType} placeholder={placeholder} autoCapitalize={autoCapitalize} onChangeText={onChange}/>
        </>
    );
};

export default Input;