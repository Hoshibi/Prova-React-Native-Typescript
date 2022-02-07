import React, { useCallback, useEffect, useState } from 'react';

import LotteryContainer from '@components/LotteryContainer';
import gameServices from '@shared/services/game';

export function NewBet({navigation}:any) {
  
  const [info, setInfo] = useState([]);

  //Get info Game
  const getGameHandler = useCallback(async () => { 
    gameServices().listGames.then(function (response:any) {setInfo(response.data.types)})
  }, []);

  useEffect(() => {
    getGameHandler();
  }, [getGameHandler]);

  return (
    <LotteryContainer infos={info} navigation={navigation}/>
  );
}