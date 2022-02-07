import React, { useEffect, useRef, useState } from "react";
import { format } from "date-fns";

import { CardContainer, Numbers, DateValue, GameType } from "./styles";
import { convertMoneyInReal } from "@shared/helpers/convertMonetaryValue";

interface PropsType {
    numbers: string;
    date: string;
    value: number;
    gametype: string;
    idgame: number;
    infoColorGame: any;
}

const PurchasedCard: React.FC<PropsType> = ({ numbers, date, value, gametype, idgame, infoColorGame}) => {
    const [getDate, setGetDate] = useState("");
    const colorRef = useRef("#fff")


    useEffect(() => {
        var type = infoColorGame.filter( (item: any) => { 
            return item.id == idgame
        });
        colorRef.current = type[0].color;
    },[]);

    useEffect(() => {
        var formattedDate = format(new Date(date), 'dd/MM/yyyy');
        setGetDate(formattedDate);
    },[date]);

    return (
        <CardContainer color={colorRef.current}>
            <Numbers>{numbers.replace(/,/g,', ')}</Numbers>
            <DateValue>{getDate} - ({convertMoneyInReal(value)})</DateValue>
            <GameType color={colorRef.current}>{gametype}</GameType>
        </CardContainer>
    );
};

export default PurchasedCard;