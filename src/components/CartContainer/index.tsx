import React, { useEffect, useState } from "react";
import { TouchableOpacity} from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { convertMoneyInReal } from "@shared/helpers/convertMonetaryValue";
import gameServices from "@shared/services/game";
import betServices from "@shared/services/bet";
import { gameActions } from "@store/gameControl";
import Toast from "react-native-toast-message";
import { AntDesign } from '@expo/vector-icons'; 

import { Container, CartBox, InfoCart, TitleCart, NumberContainer, TextEmptyCart ,TotalPriceContainer, TextBoldTotalPrice, TextTotalPrice, BtnSave, TextBtnSave } from "./styles";
import { CartCard } from "@components/index";

interface PropsType {
    navigationPage: any
}
const CartContainer: React.FC<PropsType> = ({navigationPage}) => {
    const dispatch = useDispatch();
    
    const gamesToCart = useSelector((state: RootStateOrAny) => state.game.gamesToCart);
    const totalPrice = useSelector((state: RootStateOrAny) => state.game.totalPrice);
    const savePurchaseList = useSelector((state: RootStateOrAny) => state.game.savePurchaseList);
    const [info, setInfo] = useState([]);

    //Get listGames
    useEffect(() => {
        gameServices().listGames.then(function (response:any) {setInfo(response.data.types)})
    },[])

    const btnSaveHandler = async (event: any) => {        
        event.preventDefault();

        if(totalPrice == 0){
            Toast.show({ type: 'error', text1: 'Carrinho Vazio!'});
        }else{
            var body = {games: savePurchaseList}
            try {
                const res = await betServices().newBet(body);
                Toast.show({ type: 'success', text1: 'Compra realizada com sucesso!'});
                dispatch(gameActions.cleanCart());
                navigationPage();
                return res
            }catch(error: any) {
                if(totalPrice < 5) { Toast.show({ type: 'error', text1: 'Valor mínimo autorizado: R$5,00.'});}
                else{ Toast.show({ type: 'error', text1: error.message});}
            }
        }
    }
    
    return (
        <Container>
            <CartBox>
                <InfoCart>
                    <TitleCart>CART</TitleCart>
                    <NumberContainer persistentScrollbar={true}>
                        {gamesToCart.length === 0 && <TextEmptyCart>[ Carrinho Vazio ] </TextEmptyCart>}    
                        {gamesToCart.length !== 0 && gamesToCart.map(function ( item:any, index:number ) { 
                                return (<CartCard key={index} game={info} index={item.game} numbers={item.num}/>);
                        } )}  
                    </NumberContainer>
                    <TotalPriceContainer>
                        <TextBoldTotalPrice>CART </TextBoldTotalPrice>
                        <TextTotalPrice>TOTAL: {convertMoneyInReal(totalPrice)}</TextTotalPrice>
                    </TotalPriceContainer>
                </InfoCart>
                <TouchableOpacity activeOpacity={0.5} onPress={btnSaveHandler}>
                    <BtnSave>
                        <TextBtnSave>Save</TextBtnSave>
                        <AntDesign name="arrowright" size={30} color="#27C383" />
                    </BtnSave>
                </TouchableOpacity>
            </CartBox>
        </Container>
    );
};

export default CartContainer;