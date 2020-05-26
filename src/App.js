import React,{useState} from "react";
import "./App.css";

export default function App(props){
  const [state,setState] = useState({
        principal:'',
         rate:'',
         years:'',
         interest:''
     });

function handleChangePrincipal(event){
   setState((state) => ({...state,principal:event.target.value}));
}

function handleChangeRate(event){
  setState((state) => ({...state,rate:event.target.value}));
}

function handleChangeYears(event){
 setState((state) => ({...state,years:event.target.value}));
}

function computeInterest(event){
  event.preventDefault();
  
  const requestOptions = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      principal: Number(state.principal),
      rate: Number(state.rate),
      years: Number(state.years)
    })
  };
 
   fetch("http://localhost:8090/interest/simpleInterest",requestOptions).then(res => res.json())
   .then(data => setState((state) => ({...state,interest:data}))).catch(err => err.message);
  
}

function resetValues(event){
  event.preventDefault();
   setState({
    
      principal:'',
       rate:'',
       years:'',
       interest:''
     
  }
   );
}

  
    return (
      <div className="App">
        
        <form>
          <h1>Simple Interest Calculator</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Principal</label>
                </td>
                <td>
                  <input type="text" value = {state.principal} onChange={handleChangePrincipal}/>{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Rate of Interest</label>
                </td>
                <td>
                  <input type="text" value = {state.rate} onChange={handleChangeRate}/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Number of Years</label>
                </td>
                <td>
                  <input type="text" value = {state.years} onChange={handleChangeYears}/>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div>
          <button onClick={computeInterest}>Calculate</button> &nbsp; &nbsp;
          <button onClick={resetValues}>Reset</button>
          </div>
        </form>
        <br/>
        <br/>
      {state.interest && (  <div>
         Computed Interest is {state.interest}
       </div>
      )}
      </div>
    );



};
