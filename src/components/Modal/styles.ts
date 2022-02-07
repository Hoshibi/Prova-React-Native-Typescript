import styled from "styled-components/native";

// export const Container = styled.TouchableWithoutFeedback `
    
// `;

export const ModalContainer = styled.View `
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(192,192,192,0.3);
`;

export const Box = styled.View `
    background-color: white;
    width: 80%;
    display: flex;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 10px;
`;

export const Title = styled.Text `
    font-family: 'WorkSans_600SemiBold';
    font-size: 17px;
`;

export const TextBody = styled.Text `
    margin-top: 15px;
    font-family: 'WorkSans_400Regular';
`;

export const BtnContainer = styled.View `
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    margin-top: 25px;
`;

export const BtnClose = styled.TouchableOpacity `
    background-color: #bfbfbf;
    border-radius: 5px;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-right: 5px;
`;

export const BtnCloseText = styled.Text `
    font-family: 'WorkSans_400Regular';
`;

export const BtnConfirm = styled.TouchableOpacity `
    border-radius: 5px;
    background-color: #b5c401;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
`;

export const BtnConfirmText = styled.Text `
    font-family: 'WorkSans_400Regular';
`;