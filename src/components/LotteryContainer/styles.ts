import styled from "styled-components/native";

export const Container = styled.View `
    height: 93%;
    margin-top: 50px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 50px;
`;

export const TitleContainer = styled.View `
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const TitleBold = styled.Text `
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 24px;
    color: #707070;
`;

export const TitleNormal = styled.Text `
    font-family: 'WorkSans_400Regular_Italic';
    font-size: 24px;
    color: #707070;
`;

export const TextBold = styled.Text ` 
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 16px;
    color: #707070;
`;

export const BtnGamesContainer = styled.View `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
    padding-bottom: 25px;
`;

export const TextGame = styled.Text ` 
    color: #707070;
    font-size: 15px;
    font-family: 'WorkSans_400Regular_Italic';
`;

export const NumbersContainer = styled.View `
    margin-top: 25px;
    margin-bottom: 20px;
`;


export const BtnContainer = styled.View `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const BtnGreen = styled.View `
    font-family: 'WorkSans_600SemiBold_Italic';
    border-width: 2px;
    border-style: solid ;
    border-radius: 10px;
    border-color: #27C383;
    height: 50px;
    width: 150px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 15px;
    margin-bottom: 10px;
`;

export const TextBtnGreen = styled.Text `
    color: #27C383;
    font-family: 'WorkSans_600SemiBold';
    font-size: 16px;
`;

export const BtnAdd = styled.View `
    font-family: 'WorkSans_600SemiBold_Italic';
    border-radius: 10px;
    background-color: #27C383;
    height: 50px;
    width: 320px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
`;

export const TextBtnAdd = styled.Text `
    color: #fff;
    font-family: 'WorkSans_600SemiBold';
    font-size: 16px;
    margin-left: 20px;
`;
