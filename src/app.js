import React from 'react';
// import './App.scss';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main.js';


function App (props){
    return ( 
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        </BrowserRouter>
    );
  
}

export default App;