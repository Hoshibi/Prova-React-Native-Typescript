import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Ionicons } from '@expo/vector-icons'; 

import { gameActions } from "@store/gameControl";
import { Container, BtnTrash, NumbersContainer, Numbers, InfoNumbersContainer, GameType, Price } from "./styles";
import { convertMoneyInReal } from "@shared/helpers/convertMonetaryValue";
import ModalCart from "@components/ModalCart";

interface PropsType {
    game: {
        color: string,
        price: number,
        type: string,
    },
    numbers: string,
}

const CartCard: React.FC<PropsType> = ( {game, numbers} ) => {
    
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    function btnLixoHandler() {
        setVisible(true);
    }

    function ContinueDeleteHandler() {
        dispatch(gameActions.deleteToCart(numbers));
        setVisible(false);
    }

    const closeModalHandler = () => {
        setVisible(false);
    }

    return (
        <Container>
            <BtnTrash onPress={btnLixoHandler}>
                <Ionicons name="trash-outline" size={30} color="#868686" />
            </BtnTrash>
            <ModalCart title={"Excluir Cartela"} continueHandler={ContinueDeleteHandler} closeHandler={closeModalHandler} visible={visible}>Tem certeza que deseja excluir essa cartela do carrinho?</ModalCart>
            <NumbersContainer color={game.color}>
                <Numbers>{numbers}</Numbers>
                <InfoNumbersContainer>
                    <GameType color={game.color}>{game.type}</GameType>
                    <Price>{`${convertMoneyInReal(game.price)}`}</Price>
                </InfoNumbersContainer>
            </NumbersContainer>
        </Container>
    );
}

export default CartCard;