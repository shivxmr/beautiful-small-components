import React from "react";
import OrderButton from "./components/complete-order-button/OrderButton";
import GameCard from "./components/game-card-hover-effect/GameCard";

function App() {
  return (
    <div className="App">
      <h1>
        1. <OrderButton />
      </h1>
      <h1>
        2. <GameCard />
      </h1>
    </div>
  );
}

export default App;
