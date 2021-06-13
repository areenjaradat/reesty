import React from 'react';
import './form.scss';
let method1;
let url1
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
        
    }

    handleMethod = (e) => {
        e.preventDefault();
        console.log(e.target.value)
         method1=e.target.value
        
    }
    handleOnClick=(e)=>{
        e.preventDefault();
        this.setState({
            url: url1,
            method: method1,
        });
    }
    render(){
        return(
       <main>
           <form>
               <div>
                   <label>URL:</label>
                   <input type="text" name="url" onChange={this.handleURL} />
                   <button onClick={this.handleOnClick}>GO!</button>
               </div>
               <div className="methods">
                    <button value="GET" onClick={this.handleMethod}>GET</button>
                    <button value="POST" onClick={this.handleMethod}>POST</button>
                    <button value="PUT" onClick={this.handleMethod}>PUT</button>
                    <button value="DELETE" onClick={this.handleMethod}>DELETE</button>
                    </div>
           </form>
           <div className="Display">
                    <h3>{this.state.method}</h3>
                    <h3>{this.state.url}</h3>
                    
                </div>
       </main>
        )
       
    }
}

export default Form;