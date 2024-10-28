import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import LineChart from "./Components/LineChart/LineChart";
import Phones from "./Components/Phones/Phones";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <h1
        className="text-5xl text-blue-500 text-center font-bold mt-7
        "
      >
        REACT PRACTICE WITH TAILWIND
      </h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
