import React from 'react';
import AppStyle from './AppStyle.css';

function App() {
  return (
    <div className="App">
      Hello React World By jhryu
      <br></br>
      GoodBye By jhryu2
      <br></br>
      GoodBye By jhryu3
      <br></br>
      GoodBye By jhryu4
      <br></br>
      <button className={AppStyle["btn_custom"]}>
        Hello React World By Young
      </button>
    </div>
    
  );
}

export default App;
