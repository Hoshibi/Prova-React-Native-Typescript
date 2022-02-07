import React from "react";

import CartContainer from "@components/CartContainer";

export function Cart({navigation}:any) {
    return(
        <CartContainer navigationPage={() => navigation.navigate('Home')}/>
    );
}