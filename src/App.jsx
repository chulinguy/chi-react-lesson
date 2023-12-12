import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import PageRouter from "./PageRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <h1>Chi's React PD</h1>
      <PageRouter />
    </BrowserRouter>
  );
}

export default App;
