import styled from "styled-components/native"

interface StyledProps {
    back?: boolean;
}

export const Container = styled.View `
    margin-top: 20%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
`;

export const Title = styled.Text `
    font-size: 36px;
    font-family: 'WorkSans_600SemiBold_Italic';
    color: #707070;
    margin-bottom: 10px;
    margin-top: 20px;
`;

export const FormView = styled.View `
    margin-top: 10px;
    background-color: white;
    width: 100%;
    border-radius: 10px;
    border-width: 2px;
    border-style: solid;
    border-color: #EEEEEE;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const BtnGreen = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 40px;
`;

export const TextBtnGreen = styled.Text `
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 36px;
    color: #B5C401;
`;

export const IconGreen = styled.View `
    margin-top:10px;
    margin-left: 15px;
`;

export const BtnGray = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 40px;
`;

export const TextBtnGray = styled.Text `
    font-family: 'WorkSans_600SemiBold_Italic';
    font-size: 36px;
    color: #707070;
`;

export const IconGray = styled.View<StyledProps> `
    margin-top:10px;
    margin-right: ${props => (props.back === true ? '15px' : '0px')};
    margin-left: ${props => (props.back === false ? '15px' : '0px')};
`;