import styled from "styled-components/native";

interface StyledProps {
    color: string;
}

export const Btn = styled.TouchableOpacity<StyledProps> `
    background: #fff; 
    border-width: 3px;
    border-radius: 30px;
    border-color: ${props => props.color};
    border-style: solid;
    height: 34px;
    width: 112px;
    margin-right: 7px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text<StyledProps> `
    font-size: 14px;
    font-family: 'WorkSans_600SemiBold_Italic';
    color: ${props => props.color} ;
`;

export const BtnSelected = styled.TouchableOpacity<StyledProps> `
    background: ${props => props.color}; 
    border-width: 3px;
    border-radius: 30px;
    border-color: ${props => props.color};
    border-style: solid;
    height: 34px;
    width: 112px;
    margin-right: 7px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextSelected = styled.Text<StyledProps> `
    font-size: 14px;
    font-family: 'WorkSans_600SemiBold_Italic';
    color: white ;
`;