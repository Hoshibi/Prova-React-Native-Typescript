import React from "react";
import { Container, Title, InfoCard, NameContainer, EmailContainer, BoldText, NormalText, BtnEdit, TextBtnEdit } from "./styles";

interface PropsType {
    btnEditProfile?: () => void;
    name: string;
    email: string;
    navigation: any;
}

const AccountContainer: React.FC<PropsType> = ({btnEditProfile, name, email, navigation}) => {
    return(
        <Container>
            <Title>MY ACCOUNT</Title>
            <InfoCard>
                <NameContainer>
                    <BoldText>Name:</BoldText>
                    <NormalText>{name}</NormalText>
                </NameContainer>
                <EmailContainer>
                    <BoldText>Email:</BoldText>
                    <NormalText>{email}</NormalText>
                </EmailContainer>
            </InfoCard>
            <BtnEdit onPress={btnEditProfile}>
                    <TextBtnEdit>Editar Perfil</TextBtnEdit>
            </BtnEdit>
        </Container>
    );
}

export default AccountContainer;