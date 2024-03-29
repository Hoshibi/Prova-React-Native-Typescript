import React from "react";
import { TouchableOpacity } from "react-native";

import { StyledLink } from './styles';

interface PropsType {
    onPress: () => void;
}

const ResetPasswordLink: React.FC<PropsType> = ({onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <StyledLink>I forgot my password</StyledLink>
        </TouchableOpacity>
    );
};

export default ResetPasswordLink;