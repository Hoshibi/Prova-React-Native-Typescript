import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "@store/gameControl";

import { Btn, TextButton, BtnSelected, TextSelected } from "./styles";

interface PropsType {
    color: string;
    game: string;
    navigation: any;
}

const BtnFilter: React.FC<PropsType> = ({ children, color, game, navigation }) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setSelected(false);
        });
        return unsubscribe;
    }, [navigation]);
    
    function buttonHandler() {
        !!selected  && dispatch(gameActions.removeGameToFilter(game)) && setSelected(false);
        !selected && dispatch(gameActions.addGameToFilter(game)) && setSelected(true) 
    }
    
    return (
        <>
            {!!selected && <BtnSelected activeOpacity={0.5} color={color} onPress={buttonHandler}><TextSelected color={color}>{children}</TextSelected></BtnSelected>}
            {!selected && <Btn activeOpacity={0.5} color={color} onPress={buttonHandler}><TextButton color={color}>{children}</TextButton></Btn>}
        </>
    );
}

export default BtnFilter;