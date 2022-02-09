import React from "react";
import { Alert, Modal } from "react-native";

import { ModalContainer, Box, Title, TextBody, BtnContainer, BtnClose, BtnCloseText, BtnConfirm, BtnConfirmText } from "./styles";

interface TypeProps {
    title: string,
    continueHandler: () => void,
    closeHandler: () => void,
    visible : boolean,
}

const ModalCart: React.FC<TypeProps> = ({children, title, continueHandler, closeHandler, visible}) => {
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <ModalContainer>
                <Box>
                    <Title>{title}</Title>
                    <TextBody>{children}</TextBody>
                    <BtnContainer>
                        <BtnClose onPress={closeHandler}><BtnCloseText>Cancelar</BtnCloseText></BtnClose>
                        <BtnConfirm onPress={continueHandler}><BtnConfirmText>Continuar</BtnConfirmText></BtnConfirm>
                    </BtnContainer>
                </Box>
            </ModalContainer> 
        </Modal>
    );
}

export default ModalCart;