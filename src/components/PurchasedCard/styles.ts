import styled from "styled-components/native";

interface StyledProps {
    color: string;
}

export const CardContainer = styled.View <StyledProps> `   
    margin-bottom: 20px;
    border-radius: 3px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-left-width: 8px;
    borderLeftColor: ${props => props.color};
`;

export const Numbers = styled.Text `
    font-size: 18px;
    font-family: 'WorkSans_600SemiBold_Italic';
    color: #868686;
`;

export const DateValue = styled.Text `
    font-size: 18px;
    font-family: 'WorkSans_400Regular';
    color: #868686;
    margin-top: 6px;
    margin-bottom: 6px;
`;

export const GameType = styled.Text <StyledProps>  `
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 18px;
    color: ${props => props.color};
`;