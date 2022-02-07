import styled from "styled-components/native";

interface StyledProps {
    color?: string;
    selected?: boolean;
}

export const BtnStyle = styled.TouchableOpacity<StyledProps> `
    background-color: ${props => (!!props.selected ? props.color : '#ADC0C4')};
    width: 64px;
    height: 64px;
    border-radius:32px;
    border-width: 0px;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
    margin-bottom: 7px;
`;

export const TextBtn = styled.Text `
    color: white;
    font-size: 20px;
    font-family: 'WorkSans_600SemiBold';
`;