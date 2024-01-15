import { useState } from "react";
import "./App.css";
import DiscountTable from "./components/DiscountTable";
import OptInForm from "./components/OptInForm";
import SpinnerSettings from "./components/SpinnerSettings";
interface DiscountInfo {
  id: string;
  customerEmail: string;
  customerName: string;
  discountId: string;
  discountValue: number;
  discountType: string;
  discountColor?: string;
}

function App() {
  const [discountInfo, setDiscountInfo] = useState<DiscountInfo[] | []>([]);

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
          <SpinnerSettings
            discountTable={discountInfo}
            setDiscountTable={setDiscountInfo}
          />
          <DiscountTable
            discountInfo={discountInfo}
            setDiscountInfo={setDiscountInfo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
