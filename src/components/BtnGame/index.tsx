import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { gameActions } from "@store/gameControl";

import { Btn, TextButton, BtnSelected, TextSelected } from "./styles";

interface PropsType {
    color: string;
    id: number;
    price: number;
    index: number;
    resetFilter: boolean;
}

const BtnGame: React.FC<PropsType> = ({ children, color, price, id, index, resetFilter}) => {
    const dispatch = useDispatch();
    const gameSelected = useSelector((state: RootStateOrAny) => state.game.gameSelected);
    
    function buttonHandler() {
        gameSelected === id && !!resetFilter && dispatch(gameActions.setGame([1,0,0]));
        gameSelected !== id && dispatch(gameActions.setGame([id,index,price]));

        dispatch(gameActions.clearGame())
    }

    return (
        <>
            {gameSelected === id && <BtnSelected activeOpacity={0.5} color={color} onPress={buttonHandler}><TextSelected color={color}>{children}</TextSelected></BtnSelected>}
            {gameSelected !== id && <Btn activeOpacity={0.5} color={color} onPress={buttonHandler}><TextButton color={color}>{children}</TextButton></Btn>}
        </>
    );
}

export default BtnGame;