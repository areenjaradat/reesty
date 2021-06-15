import React from 'react';
import './history.scss';
// class History extends React.Component {


//     componentDidMount(){

//         let div=document.getElementById('divId')
    
//         let resu=localStorage.getItem('headers');
//         let object=JSON.parse(resu);
//         console.log('scasca',object)
//         if(object){
//           object.forEach(element => {
//             let para=document.createElement('p');
//             para.textContent=element.method;
//             para.setAttribute('id',element.method)
//             div.appendChild(para);
//             let para1=document.createElement('p');
//             para1.textContent=element.url;
//             para1.setAttribute('id',element.url)
//             div.appendChild(para1);
    
           
//           });
//         }
        
//       }

// handleClick(e){
//     console.log('e.currentTarget.childNodes[2].childNodes[0].firstChild',e.currentTarget.childNodes[0].innerHTML)
// }


//     render() {
//         return (
//           <>
//            <div id="divId" onClick={this.handleClick}>

//            </div>
//           </>
//         );
//       }
// }
let resu=localStorage.getItem('headers');
         let object=JSON.parse(resu);

function History({ props }) {
    return (
      <section id="history">
        <table>
          <thead>
            <tr>
              <th className="fwidth">Method</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {object.map((val, i) => {
              return (
                <tr
                  key={i + val.method + val.url}
                 
                  onClick={historyClick}
                >
                  <th className="fwidth" id={`his${val.method}`}>{val.method}</th>
                  <td>{val.url}</td>
                  <td style={{ display: 'none' }}>{val.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
  
  export default History;
  
  function historyClick(e) {
    let method = e.currentTarget.childNodes[0].innerHTML;
    let url = e.currentTarget.childNodes[1].innerHTML;
    let body = e.currentTarget.childNodes[2].innerHTML;
  console.log(method)
  console.log(url)
    const input = document.getElementById('inputUrl');
    console.log(input)
    input.value = url;
 
    const button = document.getElementById(`${method}`)
    console.log(button)
  button.click();
   
  
    const text = document.getElementById('body');
   
    text.innerHTML = body;
  
    // const submit = document.getElementById('submit');
    // submit.click();
  }
