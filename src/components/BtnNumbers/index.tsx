import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../store/gameControl";

import { BtnStyle, TextBtn } from "./styles";

interface PropsType {
    value: number;
    color: string;
    max: number;
    range: number;
}

const BtnNumbers: React.FC<PropsType> = ({children, value, color, max, range})  => {
    const dispatch = useDispatch();
    const numbers = useSelector((state: RootStateOrAny) => state.game.selectedNumberList);
    
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if(numbers.includes(value)){  
            setIsSelected(true); 
        }
        else{ 
            setIsSelected(false); 
        }
    }, [numbers, value]);

    function selectHandler() {
        if(numbers.length <= max){
            if(!isSelected){ 
                if(numbers.length === max){
                    Toast.show({ type: 'error', text1: `Máximo de: ${max} números` });
                }
                else{
                    dispatch(gameActions.addNumberToList(value));
                }
            }
            else{ 
                dispatch(gameActions.removeNumberToList(value));
            }
        }
    }

    return (
        <BtnStyle onPress={selectHandler} selected={isSelected} color={color}>
            <TextBtn>{children}</TextBtn>
        </BtnStyle>   
    );
}

export default BtnNumbers;