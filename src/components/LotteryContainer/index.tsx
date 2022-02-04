import React from "react";

import { ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";

import BtnGame from "../BtnGame";
import BtnNumbers from "../BtnNumbers";

import { Container, TitleContainer, TitleBold, TitleNormal, TextBold, TextGame, NumbersContainer, BtnGamesContainer, BtnContainer, BtnGreen, TextBtnGreen, BtnAdd, TextBtnAdd } from "../LotteryContainer/styles";
const LotteryContainer: React.FC = () => {
    return(
        <ScrollView>
            <Container>
                <TitleContainer>
                    <TitleBold>NEW BET </TitleBold>
                    <TitleNormal>FOR LOTOFÁCIL</TitleNormal>
                </TitleContainer>

                <TextBold>Choose a game</TextBold>
                <BtnGamesContainer>
                    <BtnGame />
                    <BtnGame />
                    <BtnGame />
                </BtnGamesContainer>
                
                <TextBold>Fill your bet</TextBold>
                <TextGame>Mark as many numbers as you want up to a maximun of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.</TextGame>

                <NumbersContainer>
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                    <BtnNumbers />
                </NumbersContainer>

                <BtnContainer>
                    <TouchableOpacity activeOpacity={0.5}>
                        <BtnGreen>
                            <TextBtnGreen>Complete game</TextBtnGreen>
                        </BtnGreen>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.5}>
                        <BtnGreen>
                            <TextBtnGreen>Clear game</TextBtnGreen>
                        </BtnGreen>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>
                        <BtnAdd>
                            <Ionicons name="cart-outline" size={28} color="white" />
                            <TextBtnAdd>Add to cart</TextBtnAdd>
                        </BtnAdd>
                    </TouchableOpacity>
                </BtnContainer>
            </Container>

        </ScrollView>
    );
};

export default LotteryContainer;