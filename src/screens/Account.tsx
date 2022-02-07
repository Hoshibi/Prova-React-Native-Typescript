import React, { useEffect, useState } from 'react';

import AccountContainer from '@components/AccountContainer';
import userServices from '@shared/services/user';

export function Account({navigation}: any) {

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  function onSignUp() {
    navigation.navigate('UpdateMyUser');
  }

  useEffect(() => {
    userServices().myProfile().then(function (response:any) { 
      setName(response.data.name);
      setEmail(response.data.email);
    })
  },[email, name])


  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.navigate('Account');
      userServices().myProfile().then(function (response:any) { 
        setName(response.data.name);
        setEmail(response.data.email);
      });
    });
    return unsubscribe;
  }, [navigation]);
  
  return (
    <AccountContainer btnEditProfile={onSignUp} name={`${name}`} email={`${email}`} navigation={navigation}/>
  );
}