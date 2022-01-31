import React from 'react';

import { InputStyle } from './styles'

interface PropsType {
    dataCy?: string;
    keyboardType: any;
    placeholder: string;
    autoCapitalize: any;
}

const Input: React.FC<PropsType> = ({ dataCy, keyboardType, placeholder, autoCapitalize}) => {
    return (
        <InputStyle data-cy={dataCy} keyboardType={keyboardType} placeholder={placeholder} autoCapitalize={autoCapitalize}/>
    );
};

export default Input;