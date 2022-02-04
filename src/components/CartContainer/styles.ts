import styled from "styled-components/native";

export const Container = styled.View `
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
`;

export const CartBox = styled.View `
    background-color: red;
    width: 360px;
    border-radius: 7px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(218, 218, 218);
    background-color: white;
`;

export const InfoCart = styled.View `
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 25px;
    padding-bottom: 40px;
`;

export const TitleCart = styled.Text `
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 24px;
    color: #707070;
`;

export const NumberContainer = styled.View `
    margin-top: 25px; 
    margin-bottom: 10px; 
`;

export const TotalPriceContainer = styled.View `
    display: flex;
    flex-direction: row;
`;

export const TextBoldTotalPrice = styled.Text `
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 24px;
    color: #707070;
`;

export const TextTotalPrice = styled.Text `
    font-family: 'WorkSans_300Light';
    font-size: 24px;
    color: #707070;
`;

export const BtnSave = styled.View `
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top-width: 1px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    border-style: solid;
    border-color: rgb(218, 218, 218);
    background-color: #FAFAFA;
`;

export const TextBtnSave = styled.Text `
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 35px;
    color: #27C383;
    margin-right: 15px;
`;