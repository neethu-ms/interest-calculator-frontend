import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <form onSubmit={() => ""}>
          <h1>Simple Interest Calculator</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Principal</label>
                </td>
                <td>
                  <input type="text" />{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Rate of Interest</label>
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Number of Years</label>
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button>Calculate</button>
        </form>
      
      </div>
    );
  }
}

export default App;
