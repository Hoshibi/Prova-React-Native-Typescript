import React from "react";
import { Text } from "react-native";

import { CardContainer, Numbers, DateValue, GameType } from "./styles";

const PurchasedCard: React.FC = () => {
    return (
        <CardContainer>
            <Numbers>01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25</Numbers>
            <DateValue>30/11/2020 - (R$ 2,50) </DateValue>
            <GameType>Lotofácil</GameType>
        </CardContainer>
    );
};

export default PurchasedCard;