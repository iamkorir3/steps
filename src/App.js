import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <p>kor</p>
      <p>cor</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
console.log(root);

export default App;
