import React, { useCallback, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import RecentGames from '@components/RecentGames';
import gameServices from '@shared/services/game';
import betServices from '@shared/services/bet';

export function Home({navigation}:any) {
  const gameToFilter = useSelector((state: RootStateOrAny) => state.game.gameToFilter);

  const [infoGame, setInfoGame] = useState([]);
  const [recentGames, setRecentGames] = useState([]);
  const [infoColorGame, setInfoColorGame] = useState([{}]);

  //Get info Game
  const getGameHandler = useCallback(async () => {
    gameServices().listGames.then(function (response:any) {
      setInfoGame(response.data.types)
    })
  }, []);

  const getRecentGamesHandler = useCallback(async () => {
    betServices().listBet(gameToFilter).then(function (response:any) {setRecentGames(response.data)})
  }, [gameToFilter, betServices]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      betServices().listBet(gameToFilter).then(function (response:any) {setRecentGames(response.data)})
    });
    return unsubscribe;
  }, [navigation]);
  
  useEffect(() => {
    getGameHandler();
    getRecentGamesHandler();
  }, [getGameHandler,getRecentGamesHandler]);
  

  useEffect(() => {
    let arrayColor: { id: number; color: string; }[] = [];
    infoGame.forEach(function ( item: {id:number, color: string} ) { 
      arrayColor.push(
        {
          id: item.id,
          color: item.color
        }
      )
    } )
    setInfoColorGame(arrayColor);
  },[infoGame])

  return (
    <RecentGames navigation={navigation} typeGame={infoGame} recentGameInfo={recentGames} infoColorGame={infoColorGame}/>
  );
}