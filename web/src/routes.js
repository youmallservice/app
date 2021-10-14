import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from './pages/home'
import Shop from './pages/shop'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/loja" exact component={Shop}/>
            </Switch>
        </BrowserRouter>
    );
}
