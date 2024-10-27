import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1
        className="text-5xl text-blue-500 text-center font-bold mt-7
      "
      >
        REACT PRACTICE WITH TAILWIND
      </h1>
    </>
  );
}

export default App;
