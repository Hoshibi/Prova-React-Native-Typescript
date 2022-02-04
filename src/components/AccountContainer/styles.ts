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
`;

export const EmailContainer = styled.View `
    display: flex;
    flex-direction: row;
`;

export const BoldText = styled.Text `
    font-family: 'WorkSans_600SemiBold';
    color: #4d4d4d;
`;

export const NormalText = styled.Text `
    font-family: 'WorkSans_400Regular'
    padding-left: 10px;
    color: #4d4d4d;
`;

export const BtnEdit = styled.TouchableOpacity `
    background-color: #C8D34A;
    border-radius: 5px;
    width: 160px;
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