import styled from "styled-components/native";

export const Container = styled.View `
    height: 93%;
    margin-top: 50px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 50px;
`;

export const TitlePage = styled.Text `
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 24px;
    color: #707070;
`;

export const TitleFilter = styled.Text `
    margin-top: 18px;
    margin-bottom: 8px;
    font-family: 'WorkSans_400Regular_Italic';
    font-size: 19px;
    color: #707070;
`;

export const ContainerFilters = styled.View `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 25px;
`;

export const ContainerGames = styled.View `
    margin-top: 15px;
    margin-bottom: 5px;
`;

export const TextNoPurchased = styled.Text `
    font-family: 'WorkSans_400Regular';
    margin-bottom: 10px;
`;

export const TextNoPurchasedBold = styled.Text `
    font-family: 'WorkSans_600SemiBold';
`;

export const TextNoPurchasedContainer = styled.View `
    background-color: #e6e6e6;
    border-radius: 10px;
    padding-left: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
`;