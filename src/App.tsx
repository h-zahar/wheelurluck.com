import "./App.css";
import DiscountTable from "./components/DiscountTable";
import SpinnerSettings from "./components/SpinnerSettings";

function App() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          width: "80vw",
        }}
      >
        <SpinnerSettings />
        <DiscountTable />
      </div>
    </>
  );
}

export default App;
