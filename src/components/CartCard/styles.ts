import styled from "styled-components/native";

interface StyledProps {
    color: string;
}

export const Container = styled.View `
    margin-bottom: 25px;
    margin-right: 10px; 
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BtnTrash = styled.TouchableOpacity `
    padding-right: 12px;
`;

export const NumbersContainer = styled.View <StyledProps> `
    border-radius: 5px;
    border-style: solid;
    border-left-width: 5px;
    border-color: ${props => props.color};
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    margin-right: 40px;
`;

export const Numbers = styled.Text `
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 18px;
    color: #707070;
`;

export const InfoNumbersContainer = styled.View `
    display: flex;
    flex-direction: row;
    margin-top: 7px;
`;

export const GameType = styled.Text<StyledProps> `
    margin-right: 15px;
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 18px;
    color: ${props => props.color};
`;

export const Price = styled.Text `
    font-family: 'WorkSans_400Regular';
    font-size: 18px;
    color: #707070;
`;

