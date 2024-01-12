import "./App.css";
import DiscountTable from "./components/DiscountTable";
import OptInForm from "./components/OptInForm";
import SpinnerSettings from "./components/SpinnerSettings";

function App() {
  return (
    <>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            width: "80vw",
          }}
        >
          <SpinnerSettings />
          <DiscountTable />
          {/* <OptInForm /> */}
        </div>
      </div>
    </>
  );
}

export default App;
