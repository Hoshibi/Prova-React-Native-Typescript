import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Ionicons } from '@expo/vector-icons'; 

import { gameActions } from "@store/gameControl";
import { Container, BtnTrash, NumbersContainer, Numbers, InfoNumbersContainer, GameType, Price } from "./styles";
import { convertMoneyInReal } from "@shared/helpers/convertMonetaryValue";
import ModalComponent from "@components/Modal";

interface PropsType {
    game: {
        color: string,
        price: number,
        type: string,
    }[],
    index: number,
    numbers: string,
}

const CartCard: React.FC<PropsType> = ( {game, index, numbers} ) => {
    
    const dispatch = useDispatch();
    const [gameInfo, setGameInfo] = useState({color: "#000000", price: 0, type: "Game"});

    function ContinueDeleteHandler() {
        dispatch(gameActions.deleteToCart(numbers));
        dispatch(gameActions.modalState(false));
    }

    function btnLixoHandler() {
        dispatch(gameActions.modalState(true));
    }

    useEffect(() => {
        if(game.length !== 0){
            setGameInfo({ color: game[index].color, price: game[index].price, type: game[index].type})
        }
    },[]);
    
    return (
        <Container>
            <BtnTrash onPress={btnLixoHandler}>
                <Ionicons name="trash-outline" size={30} color="#868686" />
            </BtnTrash>
            <ModalComponent title={"Excluir Cartela"} continueHandler={ContinueDeleteHandler}>Tem certeza que deseja excluir essa cartela do carrinho?</ModalComponent>
            <NumbersContainer color={gameInfo.color}>
                <Numbers>{numbers}</Numbers>
                <InfoNumbersContainer>
                    <GameType color={gameInfo.color}>{gameInfo.type}</GameType>
                    <Price>{`${convertMoneyInReal(gameInfo.price)}`}</Price>
                </InfoNumbersContainer>
            </NumbersContainer>
        </Container>
    );
}

export default CartCard;