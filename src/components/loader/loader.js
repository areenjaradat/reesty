import React from 'react';
import './Loader.scss';
class Loader extends React.Component{
    render(){
        return(
            <div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div>
        )
    }
}
export default Loader;