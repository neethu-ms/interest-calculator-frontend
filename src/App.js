import React from "react";
import "./App.css";

class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
      principal:'',
       rate:'',
       years:'',
       interest:''
     
  };

  this.handleChangePrincipal = this.handleChangePrincipal.bind(this);
  this.handleChangeYears = this.handleChangeYears.bind(this);
  this.handleChangeRate = this.handleChangeRate.bind(this);
  this.computeInterest = this.computeInterest.bind(this);
  this.resetValues = this.resetValues.bind(this);
}

handleChangePrincipal(event){
   this.setState({principal: event.target.value});
}

handleChangeRate(event){
  this.setState({rate: event.target.value});
}

handleChangeYears(event){
  this.setState({years: event.target.value});
}

computeInterest(event){
  event.preventDefault();
  
  const requestOptions = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      principal: Number(this.state.principal),
      rate: Number(this.state.rate),
      years: Number(this.state.years)
    })
  };
 
   fetch("http://localhost:8090/interest/simpleInterest",requestOptions).then(res => res.json())
   .then(data => this.setState({interest:data})).catch(err => err.message);
  
}

resetValues(event){
  event.preventDefault();
   this.setState({
    
      principal:'',
       rate:'',
       years:'',
       interest:''
     
  }
   );
}

  render() {
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
                  <input type="text" value = {this.state.principal} onChange={this.handleChangePrincipal}/>{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Rate of Interest</label>
                </td>
                <td>
                  <input type="text" value = {this.state.rate} onChange={this.handleChangeRate}/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Number of Years</label>
                </td>
                <td>
                  <input type="text" value = {this.state.years} onChange={this.handleChangeYears}/>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div>
          <button onClick={this.computeInterest}>Calculate</button> &nbsp; &nbsp;
          <button onClick={this.resetValues}>Reset</button>
          </div>
        </form>
        <br/>
        <br/>
      {this.state.interest && (  <div>
         Computed Interest is {this.state.interest}
       </div>
      )}
      </div>
    );
  }
}

export default App;
