import React from 'react';
import './form.scss';
import { If, Then } from 'react-if';



class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url:'',
            method:'',
            body: '',
            isLoading:false,
            isClicked:false,
            isHistory:false,
            data:{}
        }
    }
    handleURL = (e) => {
        console.log(e.target.value)
      
        this.setState({
            url: e.target.value,
        });
    }

    handleMethod = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        
         this.setState({
            method: e.target.value,
        });
        
    }


    handleOnClick=async (e)=>{

        this.setState({ isLoading: true })

        console.log('event',e.target.url.value)
        console.log('event body',e.target.body.value)
        e.preventDefault();
        
        this.setState({
            url: e.target.url.value,
            method: this.state.method,
            body: e.target.body.value,
        });
        try {
           

            const raw = (this.state.method === 'POST' || this.state.method === 'PUT') ?
            await fetch(this.state.url, {
                method: this.state.method,
                mode: 'cors',
                body: this.state.body,
                headers: {
                    'Content-Type': 'application/json',
                  },
            }) : await fetch(this.state.url, {
                method: this.state.method,
                mode: 'cors'
            })

            const data=await raw.json()
            this.props.handler(data,this.state);
            this.setState({ data: data }) 
       if(data){
  if(!localStorage.getItem("headers")){
      localStorage.setItem("headers",JSON.stringify([this.state]));
  
  }else{
      let localData = JSON.parse(localStorage.getItem("headers"));
      const found = localData.find(elem=>{
          return (elem.url === this.state.url && elem.method===this.state.method)
      });
      if(!found){
       
          localData.push(this.state);
          localStorage.setItem("headers" , JSON.stringify(localData))
      }
  }

 

}

this.setState({ isLoading: false })      
        
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
                   <input type="text" name="url" onChange={this.handleURL} id="inputUrl"/>
                   <button >GO!</button>
               </div>
               <br/>
               <textarea type="text" name="body"  id="body" placeholder="Request body" rows="3" cols="40" />
               <div className="methods">
                    <button value="GET" id='GET' onClick={this.handleMethod}>GET</button>
                    <button value="POST" id='POST' onClick={this.handleMethod}>POST</button>
                    <button value="PUT" id='PUT' onClick={this.handleMethod}>PUT</button>
                    <button value="DELETE" id='DELETE' onClick={this.handleMethod}>DELETE</button>
                    </div>
           </form>
           <If condition={this.state.isLoading === true}>
            <Then>
            <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
             <div class="sk-cube3 sk-cube"></div>
</div>
            </Then>
          </If>
           {/* <div className="Display">
                    <h3>{this.state.method}</h3>
                    <h3>{this.state.url}</h3>
                    
                </div> */}
       </main>
        )
       
    }
}

export default Form;