import { isValidEmail } from "@shared/helpers/isValidEmail";
import userServices from "@shared/services/user";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { Container, Title, InfoCard, NameContainer, EmailContainer, BoldText, Input, BtnContainer, BtnEdit, TextBtnEdit, BtnCancel, TextBtnCancel } from "./styles";

interface PropsType {
    name: string,
    email: string,
    navigation: any
}

const AccountEditContainer: React.FC<PropsType> = ({name, email, navigation}) => {

    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    //Input Change Handler
    const nameChangeHandler = (text: string) => {
        setNameInput(text);
    };

    const emailChangeHandler = (text: string) => {
        setEmailInput(text);
    };

    useEffect(() => {
        setNameInput(name);
        setEmailInput(email);
    },[email, name])
    
    const editHandler = async (event:any) => {
        event.preventDefault();

        var errorMessage = "";
        if(nameInput.trim().length === 0) { errorMessage='Campo name vazio! Insira uma nome' }
        if(emailInput.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
        if(emailInput.trim().length === 0 && nameInput.trim().length === 0) { errorMessage='Todos os campos vazios! Insira os dados' }
        if(!isValidEmail(emailInput) && emailInput.trim().length > 0 && nameInput.trim().length > 0) { errorMessage='Insira um email válido. Exemplo: exemplo@luby.com.br' }

        if(!!isValidEmail(emailInput) && emailInput.trim().length > 0 && nameInput.trim().length > 0) { 
            var body = { email: emailInput, name: nameInput }
            try {
                const res = await userServices().updateMyUser(body);
                navigation.navigate('Account');
                return res
            }catch (error: any) {
                if(error.status === 404){
                    Toast.show({type: "error", text1: "Dados Inválidos!"})
                }
            }
        }else{
            Toast.show({type: "error", text1: errorMessage})
        }
    }
    
    return(
        <Container>
            <Title>MY ACCOUNT</Title>
            <InfoCard>
                <NameContainer>
                    <BoldText>Name:</BoldText>
                    <Input value={nameInput} editable={true} onChangeText={nameChangeHandler} />
                </NameContainer>
                <EmailContainer>
                    <BoldText>Email:</BoldText>
                    <Input value={emailInput} onChangeText={emailChangeHandler} />
                </EmailContainer>
            </InfoCard>
            <BtnContainer>
                <BtnCancel onPress={() => {navigation.navigate('Account')}}>
                        <TextBtnCancel>Cancel</TextBtnCancel>
                </BtnCancel>
                <BtnEdit onPress={editHandler}>
                        <TextBtnEdit>Editar</TextBtnEdit>
                </BtnEdit>
            </BtnContainer>
        </Container>
    );
}

export default AccountEditContainer;