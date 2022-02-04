import React from "react";
import { Container, Title, InfoCard, NameContainer, EmailContainer, BoldText, NormalText, BtnEdit, TextBtnEdit } from "./styles";

interface PropsType {
    btnEditProfile?: () => void;
}

const AccountContainer: React.FC<PropsType> = ({btnEditProfile}) => {
    return(
        <Container>
            <Title>MY ACCOUNT</Title>
            <InfoCard>
                <NameContainer>
                    <BoldText>Name:</BoldText>
                    <NormalText>Taianny Sayuri Shiotani</NormalText>
                </NameContainer>
                <EmailContainer>
                    <BoldText>Email:</BoldText>
                    <NormalText>tanyshiotani@hotmail.com</NormalText>
                </EmailContainer>
            </InfoCard>
            <BtnEdit onPress={btnEditProfile}>
                    <TextBtnEdit>Editar Perfil</TextBtnEdit>
            </BtnEdit>
        </Container>
    );
}

export default AccountContainer;