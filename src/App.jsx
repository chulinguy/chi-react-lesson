import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PagePerformance from "./pages/PagePerformance/PagePerformance";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>Chi's React PD</h1>
    </>
  );
}

export default App;
