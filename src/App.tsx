import { useState } from "react";
import "./App.css";
import DiscountTable from "./components/DiscountTable";
import SpinnerSettings from "./components/SpinnerSettings";
interface DiscountInfo {
  id?: string;
  customerEmail?: string;
  customerName?: string;
  discountId: string;
  discountValue: number;
  discountType: string;
  discountColor?: string;
}

interface CurrentCustomers {
  id: string;
  customerName: string;
  customerEmail: string;
}

function App() {
  const [discountInfo, setDiscountInfo] = useState<DiscountInfo[] | []>([]);
  const [currentCustomers, setCurrentCustomers] = useState<
    CurrentCustomers[] | []
  >([]);

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
            currentCustomers={currentCustomers}
            setCurrentCustomers={setCurrentCustomers}
          />
          <DiscountTable
            discountInfo={discountInfo}
            setDiscountInfo={setDiscountInfo}
            currentCustomers={currentCustomers}
          />
        </div>
      </div>
    </>
  );
}

export default App;
