import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss';
class results extends React.Component {



    render() {
        console.log("child : ", this.props)

        return (
          <>
         
            <section className="resultSec">
              <ReactJson src={ this.props.results} theme="monokai"/>
             
            </section>
            </>
          );
}
}
export default results;