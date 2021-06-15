
import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history/history';

import { If, Then } from 'react-if';
 

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '' , 
      method: '', 
      count: 0 ,
      results: {},
      show:false
    };
  }
  handleForm = (results,state) => {
    this.setState({
      results: results,
      show:true
    });
  }
  render() {
    return (
      <>
        <Header />
        <main>
         
          <Form handler={this.handleForm} />
          <div className="styling">
          <History/>
          <If condition={this.state.show}>
              <Then>
          <Results results={this.state} />
          </Then>
          </If>
         
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
// function App() {
//   return (
//     <React.Fragment>
//     <Header/>
//     <Form/>
//     <Footer/>
//   </React.Fragment>
//   );
// }

export default App;
