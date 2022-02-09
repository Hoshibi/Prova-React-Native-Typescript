import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

import { BtnGame, ListNumbers } from "@components/index";
import { Container, TitleContainer, TitleBold, TitleNormal, TextBold, TextGame, NumbersContainer, BtnGamesContainer, BtnContainer, BtnGreen, TextBtnGreen, BtnAdd, TextBtnAdd } from "../LotteryContainer/styles";
import { gameActions } from '@store/gameControl';
import Toast from "react-native-toast-message";
import ModalComponent from "@components/Modal";

interface PropsType {
    infos: {
        color: string,
        description: string,
        id: number,
        max_number: number,
        price: number,
        range: number,
        type: string,
    }[],
    navigation: any,
}

const LotteryContainer: React.FC<PropsType> = ({ infos, navigation }) => {
    const dispatch = useDispatch();
    const indexGame = useSelector((state: RootStateOrAny) => state.game.indexGameSelected);
    const gameSelected = useSelector((state: RootStateOrAny) => state.game.gameSelected);
    const numbersSelected = useSelector((state: RootStateOrAny) => state.game.selectedNumberList);

    // Inicia setado o tipo de jogo (Primeiro da lista)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(gameActions.setGame([1,0,2.5]));
        });
        return unsubscribe;
    }, [navigation]);

    // Handler
    function completeGameHandler(){
        dispatch(gameActions.completeGame([infos[indexGame].range,infos[indexGame].max_number]))
    }
    
    function clearGameHandler(){
        dispatch(gameActions.clearGame())
    }

    function AddCartHandler() {
        if(numbersSelected.length < infos[indexGame].max_number){
            Toast.show({type: 'error', text1: `Faltam ${infos[indexGame].max_number-numbersSelected.length} números para completar!`}) 
        }else{
            dispatch(gameActions.addToCart());
            dispatch(gameActions.savePurchase());
            dispatch(gameActions.clearGame());
        }
    }
    
    const ContinueAfterPermissionHandler = () => {
        dispatch(gameActions.addPermission(true));
        dispatch(gameActions.modalState(false));
        dispatch(gameActions.addToCartAfterPermission());
        dispatch(gameActions.savePurchase());
        Toast.show({ type: 'success', text1: 'Adicionado ao carrinho com sucesso! ' });
    }

    return(
        <ScrollView>
            <Container>
                <TitleContainer>
                    <TitleBold>NEW BET </TitleBold>
                    {  infos.filter( (item) => { return item.id === gameSelected }).map((item, index) => {
                        var game = item.type
                        return (<TitleNormal key={index}>FOR {game.toLocaleUpperCase()}</TitleNormal>); } ) 
                    }
                </TitleContainer>

                <TextBold>Choose a game</TextBold>
                <BtnGamesContainer>
                {  infos.map(function ( item,index ) { 
                    return (<BtnGame key={item.id} color={item.color} price={item.price} id={item.id} index={index} resetFilter={false}>{item.type}</BtnGame>);
                   } ) 
                }
                </BtnGamesContainer>
                
                <TextBold>Fill your bet</TextBold>
                {  infos.filter( (item) => { return item.id === gameSelected }).map(function ( item ) { 
                    return (<TextGame key={item.id}>{item.description}</TextGame>); } ) 
                }
                
                <NumbersContainer>
                {  infos.filter( (item) => { return item.id === gameSelected }).map(function ( item ) { 
                    return (<ListNumbers key={item.id} range={item.range} color={item.color} max={item.max_number}/>);
                } ) 
                }
                </NumbersContainer>

                <BtnContainer>
                    <TouchableOpacity activeOpacity={0.5} onPress={completeGameHandler}>
                        <BtnGreen>
                            <TextBtnGreen>Complete game</TextBtnGreen>
                        </BtnGreen>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.5} onPress={clearGameHandler}>
                        <BtnGreen>
                            <TextBtnGreen>Clear game</TextBtnGreen>
                        </BtnGreen>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} onPress={AddCartHandler}>
                        <BtnAdd>
                            <Ionicons name="cart-outline" size={28} color="white" />
                            <TextBtnAdd>Add to cart</TextBtnAdd>
                        </BtnAdd>
                    </TouchableOpacity>
                </BtnContainer>
                <ModalComponent title={'Cartela Repetida'} continueHandler={ContinueAfterPermissionHandler}>{'Uma cartela com os mesmos números já existe no carrinho. Deseja colocar novamente?'}</ModalComponent>
            </Container>
        </ScrollView>
    );
};

export default LotteryContainer;