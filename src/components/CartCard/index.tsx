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
    const [color, setColor] = useState("#000000");
    const [type, setType] = useState("Game");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        setColor(game.color);
        setType(game.type)
        setPrice(game.price)
    }),[game];

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
            <NumbersContainer color={color}>
                <Numbers>{numbers}</Numbers>
                <InfoNumbersContainer>
                    <GameType color={color}>{type}</GameType>
                    <Price>{`${convertMoneyInReal(price)}`}</Price>
                </InfoNumbersContainer>
            </NumbersContainer>
        </Container>
    );
}

export default CartCard;