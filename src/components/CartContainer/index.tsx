import React from "react";
import { AntDesign } from '@expo/vector-icons'; 

import { Container, CartBox, InfoCart, TitleCart, NumberContainer, TotalPriceContainer, TextBoldTotalPrice, TextTotalPrice, BtnSave, TextBtnSave } from "./styles";
import { CartCard } from "@components/index";
import { ScrollView, TouchableOpacity } from "react-native";

const CartContainer: React.FC = () => {
    return (
        <ScrollView>
            <Container>
                <CartBox>
                    <InfoCart>
                        <TitleCart>CART</TitleCart>
                        <NumberContainer>
                            <CartCard />
                            <CartCard />
                        </NumberContainer>
                        <TotalPriceContainer>
                            <TextBoldTotalPrice>CART </TextBoldTotalPrice>
                            <TextTotalPrice>TOTAL: R$ 0,00</TextTotalPrice>
                        </TotalPriceContainer>
                    </InfoCart>
                    <TouchableOpacity activeOpacity={0.5}>
                        <BtnSave>
                            <TextBtnSave>Save</TextBtnSave>
                            <AntDesign name="arrowright" size={30} color="#27C383" />
                        </BtnSave>
                    </TouchableOpacity>
                </CartBox>
            </Container>
        </ScrollView>
    );
};

export default CartContainer;