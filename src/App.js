
import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '' , 
      method: '', 
      count: 0 ,
      Headers: {} ,
      Response: [],
    };
  }
  handleForm = (headers, body) => {
    this.setState({
      Headers: headers,
      Response: body,
    });
  }
  render() {
    return (
      <>
        <Header />
        <main>
          <Form handler={this.handleForm} />
          
          <Results results={this.state} />
         
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
