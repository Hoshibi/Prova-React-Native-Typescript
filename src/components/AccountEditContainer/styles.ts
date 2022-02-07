import styled from "styled-components/native";

export const Container = styled.View`
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 40px;
    margin-bottom: 20px;
`;

export const Title = styled.Text `
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 24px;
    color: #707070;
`;

export const InfoCard = styled.View `
    background-color: #dbdbdb;
    padding: 60px;
    padding-bottom: 70px;
    margin-top: 30px;
    border-radius: 10px;
`;

export const NameContainer = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const EmailContainer = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BoldText = styled.Text `
    font-family: 'WorkSans_600SemiBold';
    padding-right: 10px;
    color: #4d4d4d;
`;

export const Input = styled.TextInput `
    width: 240px;
    font-family: 'WorkSans_400Regular';
    color: #4d4d4d;
    background-color: white;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
`;

export const BtnContainer = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
`;

export const BtnEdit = styled.TouchableOpacity `
    background-color: #C8D34A;
    border-radius: 5px;
    width: 120px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-top: 30px;
`;

export const TextBtnEdit = styled.Text `
    font-family: 'WorkSans_600SemiBold';
    color: white;
    font-size: 16px;
`;

export const BtnCancel = styled.TouchableOpacity `
    background-color: #a6a6a6;
    border-radius: 5px;
    width: 120px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-top: 30px;
    margin-right: 10px;
`;

export const TextBtnCancel = styled.Text `
    font-family: 'WorkSans_600SemiBold';
    color: white;
    font-size: 16px;
`;