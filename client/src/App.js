import './App.css';
import React from "react"
import Header from "./Components/Header/Header";
import TinderCards from "./Components/TinderCards/TinderCards"
import SwipeButtons from "./Components/Swipebuttons/SwipeButtons"


function App() {
    //BEM class naming convention
  return (
    <div className="app">
        <Header/>
        <TinderCards/>
        <SwipeButtons/>
    </div>
  );
}

export default App;
