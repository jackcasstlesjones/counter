import { useState } from "react";

import "./App.css";

function App() {
  const [stringFull, setStringFull] = useState(["R"]);
  const [counter, setCounter] = useState(2);

  const string = "Ratimus Maximus I love you so much!";

  console.log(stringFull);

  const increaseCount = () => {
    setCounter((prevState) => prevState + 1);
    setStringFull(string.slice(0, counter));
  };

  return (
    <>
      <h1 className="prevent-select" onClick={increaseCount}>
        {stringFull}
      </h1>
    </>
  );
}

export default App;
