import React from 'react';

import { AccountContainer  } from '@components/index';

export function Account({navigation}: any) {

  function onSignUp() {
    navigation.navigate('UpdateMyUser');
  }

  return (
    <AccountContainer btnEditProfile={onSignUp}/>
  );
}