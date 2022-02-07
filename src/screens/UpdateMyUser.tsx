import React, { useEffect, useState } from 'react';

import AccountEditContainer from '@components/AccountEditContainer';
import userServices from '@shared/services/user';

export function UpdateMyUser({navigation}: any) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    userServices().myProfile().then(function (response:any) { 
      setName(response.data.name);
      setEmail(response.data.email);
    })
  },[email, name])

  return (
    <AccountEditContainer name={`${name}`} email={`${email}`} navigation={navigation}/>
  );
}