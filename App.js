import "./App.css";
import React, { useState } from "react";
function App() {
  const [simpleIntrest, setSimpleIntrest] = useState(0);
  return (
    <>
      <div className="container">
        <Header simpleIntrest={simpleIntrest} />
      </div>
      <div className="next">
        <Inputs setSimpleIntrest={setSimpleIntrest} />
      </div>
    </>
  );
}
function Header({ simpleIntrest }) {
  //const [simpleIntrest, setSimpleIntrest] = useState(0);
  return (
    <div>
      <h1>Intrest Calculator</h1>
      <p>Calculate your intrest easily</p>
      <div className="color">
        <h1>${simpleIntrest}</h1>
        <p>simple intrest</p>
      </div>
    </div>
  );
}
function Inputs({ setSimpleIntrest }) {
  const [principalAmt, setPrincipalAmt] = useState(0);
  const [intrests, setIntrests] = useState(0);
  const [time, setTime] = useState(0);
  function changePrincipal(e) {
    setPrincipalAmt(e.target.value);
  }
  function changeintrests(e) {
    setIntrests(e.target.value);
  }
  function changeTime(e) {
    setTime(e.target.value);
  }
  function handleClick() {
    const P = principalAmt;
    const R = intrests;
    const T = time;
    if (isNaN(P) || isNaN(R) || isNaN(T) || P <= 0 || R <= 0 || T <= 0) {
      alert("Please enter valid positive numbers.");
      return;
    }
    const si = (P * R * T) / 100;
    setSimpleIntrest(si);
  }
  function handleReset() {
    setPrincipalAmt(0);
    setIntrests(0);
    setTime(0);
    setSimpleIntrest(0);
  }
  return (
    <div>
      <label for="principalAmount">Enter the principal amount</label>
      <br></br>
      <input type="number" value={principalAmt} onChange={changePrincipal} />
      <br></br>
      <label for="Intrest">Enter the Rate of Intrest</label>
      <br></br>
      <input type="number" value={intrests} onChange={changeintrests} />
      <br></br>
      <label for="TimePeriod">Enter the Time period</label>
      <br></br>
      <input type="number" value={time} onChange={changeTime} />
      <br></br>
      <button onClick={handleClick}>Calculate</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
