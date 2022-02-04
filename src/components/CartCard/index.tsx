import React from "react";

import { Container, BtnTrash, NumbersContainer, Numbers, InfoNumbersContainer, GameType, Price } from "./styles";

const CartCard: React.FC = () => {
    return (
        <Container>
            <BtnTrash>

            </BtnTrash>
            <NumbersContainer>
                <Numbers>01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25</Numbers>
                <InfoNumbersContainer>
                    <GameType>Lotofácil</GameType>
                    <Price>R$ 2,50</Price>
                </InfoNumbersContainer>
            </NumbersContainer>
        </Container>
    );
}

export default CartCard;