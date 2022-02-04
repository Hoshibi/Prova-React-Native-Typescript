import React from "react";
import { AntDesign } from '@expo/vector-icons'; 

import { Container, TextButton } from "../HeaderButton/styles";
import { TouchableOpacity } from "react-native";

const HeaderButton: React.FC = () => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Container>
                <TextButton>Log out</TextButton>
                <AntDesign name="arrowright" size={22} color="#707070" />
            </Container>
        </TouchableOpacity>
    );
}

export default HeaderButton;