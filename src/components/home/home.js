
import React from 'react';
import './App.scss';

import Form from '../form/form.js';
import Results from '../results/results';
import History from '../history/history';

import { If, Then } from 'react-if';
 

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '' , 
      method: '', 
      count: 0 ,
      results: {},
      show:false,
      isHistory:false
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
