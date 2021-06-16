import './historyPage.scss';

let resu=localStorage.getItem('headers');
         let object=JSON.parse(resu);
         console.log(object)
         if(!object){
         object=[{url:'no url yet',
         method:'no method'
        }]
         }

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
                  console.log('val.data',val.data);
              return (
               
                <tr
                  key={i + val.method + val.url}
                 
                  onClick={historyClick}
                >
                  <th className="fwidth" id={`his${val.method}`}>{val.method}</th>
                  <td>{val.url}</td>
                  <td style={{ display: 'none' }}>{val.body}</td>
                  {/* <td id={`his${val.data}`}>{val.data}</td> */}
                  <td style={{ display: 'none' }}>{JSON.stringify(val.data)}</td>
                </tr>
              
             
               
              );
            })}
          </tbody>
        </table>

            <div className="showResult" id="showResult"></div>

      </section>
    );
  }
  
  export default History;
  
  function historyClick(e) {
    let method = e.currentTarget.childNodes[0].innerHTML;
    let url = e.currentTarget.childNodes[1].innerHTML;
    let body = e.currentTarget.childNodes[2].innerHTML;
    let data = e.currentTarget.childNodes[3].innerHTML;
    //console.log(e.currentTarget.childNodes)
    // let data = e.currentTarget.childNodes[3].innerHTML;
    console.log('in hist',method)
    console.log('in hist',url)
    console.log('in hist',body)
    console.log('in hist',data)

     document.getElementById('showResult').innerHTML=method+url+body+ data;
  }