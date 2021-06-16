import React from 'react' ; 


import Home from '../home/home.js';
import Help from '../help/help.js';
import History from '../historyPage/historyPage';
import { BrowserRouter} from 'react-router-dom';
import {Route , Switch} from 'react-router-dom' ;

const Main = () =>{
   return (
     <>
     <BrowserRouter>
       <Switch>
             <Route exact path="/" component={Home}  />
             <Route path="/help" component={Help} />
             <Route path="/history" component={History} />
       </Switch>
       </BrowserRouter>
     </>


   )

}

export default Main ;