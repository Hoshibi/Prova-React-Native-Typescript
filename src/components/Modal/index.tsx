import React from "react";
import { Alert, Modal } from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { gameActions } from "@store/gameControl";
import { ModalContainer, Box, Title, TextBody, BtnContainer, BtnClose, BtnCloseText, BtnConfirm, BtnConfirmText } from "./styles";

interface TypeProps {
    title: string,
}

const ModalComponent: React.FC<TypeProps> = ({children, title}) => {
    
    const dispatch = useDispatch();
    const modalOpen = useSelector((state: RootStateOrAny) => state.game.modalOpen);

    const handleClose = () => {
        dispatch(gameActions.addPermission(false));
        dispatch(gameActions.modalState(false));
    }

    const Continuehandler = () => {
        dispatch(gameActions.addPermission(true));
        dispatch(gameActions.modalState(false));
        dispatch(gameActions.addToCartAfterPermission());
        dispatch(gameActions.savePurchase());
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <ModalContainer>
                <Box>
                    <Title>{title}</Title>
                    <TextBody>{children}</TextBody>
                    <BtnContainer>
                        <BtnClose onPress={handleClose}><BtnCloseText>Cancelar</BtnCloseText></BtnClose>
                        <BtnConfirm onPress={Continuehandler}><BtnConfirmText>Continuar</BtnConfirmText></BtnConfirm>
                    </BtnContainer>
                </Box>
            </ModalContainer> 
        </Modal>
    );
}

export default ModalComponent;