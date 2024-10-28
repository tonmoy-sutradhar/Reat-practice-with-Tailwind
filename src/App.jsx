import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

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
    </>
  );
}

export default App;
