import React from "react";
import { TouchableOpacity } from "react-native";

import { Btn, TextButton } from "./styles";

const BtnGame: React.FC = () => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Btn>
                <TextButton>Lotafácil</TextButton>
            </Btn>
        </TouchableOpacity>
    );
}

export default BtnGame;