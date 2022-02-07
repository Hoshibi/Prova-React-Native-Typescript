import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Container, TitlePage, TitleFilter, ContainerFilters, ContainerGames } from "../RecentGames/styles";
import { BtnFilter, PurchasedCard } from "@components/index";
import { useDispatch } from "react-redux";
import { gameActions } from "../../store/gameControl";

interface PropsTypes {
    navigation: any;
    recentGameInfo: 
    {   id: number;
        choosen_numbers: string;
        created_at: string;
        price: number;
        type: {id:number, type: string};
    }[];
    typeGame:{
        id: number,
        color: string;
        type: string;
        price: number;
    }[];
    infoColorGame: {}[];
}

const RecentGames: React.FC<PropsTypes> = ({ navigation,typeGame, recentGameInfo, infoColorGame }) => {
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            dispatch(gameActions.clearGameToFilter());
        });
        return unsubscribe;
      }, [navigation]);

    return (
        <Container>
                <TitlePage>RECENT GAMES</TitlePage>
                <TitleFilter>Filters</TitleFilter>
                <ContainerFilters>
                {  typeGame.map(function ( item, index ) {
                    return (<BtnFilter key={item.id} color={item.color} game={item.type} navigation={navigation}>{item.type}</BtnFilter>);
                    } ) 
                }
                </ContainerFilters>
                <ScrollView>
                    <ContainerGames>
                    {recentGameInfo.map( (item) => { 
                        return (<PurchasedCard key={item.id} numbers={item.choosen_numbers} date={item.created_at} value={item.price} gametype={item.type.type} idgame={item.type.id} infoColorGame={infoColorGame}/>) ;
                    })}
                    </ContainerGames>
                </ScrollView>
        </Container>
    );
}

export default RecentGames;