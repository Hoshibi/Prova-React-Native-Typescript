import React from "react";
import { Container, Title, InfoCard, NameContainer, EmailContainer, BoldText, Input, BtnEdit, TextBtnEdit } from "./styles";


const AccountEditContainer: React.FC = () => {
    return(
        <Container>
            <Title>MY ACCOUNT</Title>
            <InfoCard>
                <NameContainer>
                    <BoldText>Name:</BoldText>
                    <Input>Taianny Sayuri Shiotani</Input>
                </NameContainer>
                <EmailContainer>
                    <BoldText>Email:</BoldText>
                    <Input>tanyshiotani@hotmail.com</Input>
                </EmailContainer>
            </InfoCard>
            <BtnEdit>
                    <TextBtnEdit>Editar Perfil</TextBtnEdit>
            </BtnEdit>
        </Container>
    );
}

export default AccountEditContainer;