import React from 'react';
// import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main.js';


function App (props){
    return ( 
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  
}

export default App;