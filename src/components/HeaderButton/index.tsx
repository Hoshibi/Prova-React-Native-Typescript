import React from "react";
import { AntDesign } from '@expo/vector-icons'; 

import { Container, TextButton } from "./styles";
import { TouchableOpacity } from "react-native";

interface PropsType {
    onClick: () => void
}

const HeaderButton: React.FC<PropsType> = ({onClick}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onClick}>
            <Container>
                <TextButton>Log out</TextButton>
                <AntDesign name="arrowright" size={22} color="#707070" />
            </Container>
        </TouchableOpacity>
    );
}

export default HeaderButton;