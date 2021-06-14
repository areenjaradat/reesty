import React from 'react';
import './form.scss';

const superagent = require('superagent');

let method1;
let url1;


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url:'',
            method:''
        }
    }
    handleURL = (e) => {
        console.log(e.target.value)
        url1=e.target.value
        this.setState({
            url: e.target.value,
        });
    }

    handleMethod = (e) => {
        e.preventDefault();
        console.log(e.target.value)
         method1=e.target.value
         this.setState({
            method: e.target.value,
        });
        
    }
    handleOnClick=async (e)=>{
        console.log('event',e.target.url.value)
        e.preventDefault();
        this.setState({
            url: e.target.url.value,
            method: this.state.method,
        });
        try {
            
            const result = await superagent[this.state.method.toLowerCase()](
                e.target.url.value
            );
            console.log('result',result);
             let { headers, body } = result;
            this.props.handler(headers, body, this.state);
        
    } catch (error) {
        this.props.handler(error.message, this.state);
        console.error(error.message)
    }
    }
    render(){
        return(
       <main>
           <form onSubmit={this.handleOnClick}>
               <div>
                   <label>URL:</label>
                   <input type="text" name="url" onChange={this.handleURL} />
                   <button >GO!</button>
               </div>
               <div className="methods">
                    <button value="GET" onClick={this.handleMethod}>GET</button>
                    <button value="POST" onClick={this.handleMethod}>POST</button>
                    <button value="PUT" onClick={this.handleMethod}>PUT</button>
                    <button value="DELETE" onClick={this.handleMethod}>DELETE</button>
                    </div>
           </form>
           {/* <div className="Display">
                    <h3>{this.state.method}</h3>
                    <h3>{this.state.url}</h3>
                    
                </div> */}
       </main>
        )
       
    }
}

export default Form;