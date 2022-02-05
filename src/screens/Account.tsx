import React from 'react';

import AccountContainer from '@components/AccountContainer';

export function Account({navigation}: any) {

  function onSignUp() {
    navigation.navigate('UpdateMyUser');
  }

  return (
    <AccountContainer btnEditProfile={onSignUp}/>
  );
}