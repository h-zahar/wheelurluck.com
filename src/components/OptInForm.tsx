import { SetStateAction, useEffect, useState } from "react";
import Icon from "../assets/images/wheel.png";
import Wheel from "./Wheel";
interface CustomElements extends HTMLFormControlsCollection {
  fullName: HTMLInputElement;
  email: HTMLInputElement;
  isAgreed: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

interface CurrentCustomers {
  id: string;
  customerName: string;
  customerEmail: string;
}

interface SpinnerInfo {
  id: string;
  discountValue: number;
  discountType: string;
  discountColor: string;
}
interface DiscountTable {
  id?: string;
  customerEmail?: string;
  customerName?: string;
  discountId: string;
  discountValue: number;
  discountType: string;
  discountColor?: string;
}

const OptInForm = ({
  isOpen,
  setIsOpen,
  spinnernfo,
  setSpinnerInfo,
  discountTable,
  setDiscountTable,
  currentCustomers,
  setCurrentCustomers,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  spinnernfo: SpinnerInfo[];
  setSpinnerInfo: (spinnerInfo: SpinnerInfo[]) => void;
  discountTable: DiscountTable[];
  setDiscountTable: React.Dispatch<SetStateAction<DiscountTable[]>>;
  currentCustomers: CurrentCustomers[];
  setCurrentCustomers: (customers: CurrentCustomers[]) => void;
}) => {
  const onFinished = (
    winner: string,
    currentCustomer: CurrentCustomers | []
  ) => {
    console.log(currentCustomer);
    const temp = [
      ...discountTable,
      {
        discountId: new Date().getTime().toString(),
        discountValue: Number(winner.split(" ")[0]),
        discountType: winner.split(" ")[1],
      },
    ];
    console.log([
      ...discountTable,
      {
        discountId: new Date().getTime().toString(),
        discountValue: Number(winner.split(" ")[0]),
        discountType: winner.split(" ")[1],
      },
    ]);
    setDiscountTable(temp);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [winner, setWinner] = useState<
    { id: string; value: string } | Record<string, never>
  >({});
  const [currentCustomer, setCurrentCustomer] = useState<
    CurrentCustomers | Record<string, never>
  >({});
  const onSubmit = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;
    if (!target.fullName.value || !target.email.value)
      return alert("Please fill up the form correctly!");
    if (!target.isAgreed.checked)
      return alert("Please agree to our privacy policy!");
    const data = {
      id: new Date().getTime().toString(),
      customerName: target.fullName.value,
      customerEmail: target.email.value,
    };
    setCurrentCustomer(data);
    // setIsSubmitted(true);
    document.getElementById("spin")?.click();
  };

  useEffect(() => {
    if (winner?.id) {
      setDiscountTable([
        ...discountTable,
        {
          ...currentCustomer,
          discountId: new Date().getTime().toString(),
          discountValue: Number(winner.value.split(" ")[0]),
          discountType: winner.value.split(" ")[1],
        },
      ]);
    }
  }, [winner?.id]);

  if (!isOpen) return <></>;
  return (
    <div
      className="opt-in-container"
      style={{
        // marginTop: 50,
        color: "white",
        textAlign: "start",
        position: "absolute",
        top: 0,
        left: 0,
        height: "calc(100% - 35px)",
        minWidth: "30vw",
        maxWidth: "55vw",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "35px 50px 0px 0",
          background: "rgb(45 133 250)",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          id="fix-img-width"
          style={{
            width: !isSubmitted ? "40%" : "100%",
            minWidth: 200,
          }}
        >
          <Wheel
            // isOpen={isWheelOpen}
            // setIsOpen={setIsWheelOpen}
            segments={spinnernfo.map(
              (spinner) => spinner.discountValue + " " + spinner.discountType
            )}
            segColors={spinnernfo.map((spinner) => spinner.discountColor)}
            winningSegment={null}
            onFinished={(
              winner: string,
              currentCustomer: CurrentCustomers | []
            ) => onFinished(winner, currentCustomer)}
            primaryColor=""
            contrastColor="white"
            buttonText=""
            isOnlyOnce={false}
            size={250}
            upDuration={100}
            downDuration={1000}
            fontFamily="Arial"
            isSubmitted={isSubmitted}
            currentCustomers={currentCustomers}
            setDiscountTable={setDiscountTable}
            discountTable={discountTable}
            setWinner={setWinner}
          />
        </div>
        <button
          id="spin"
          style={{
            transform: "translateX(-21rem)",
            background: "transparent",
            color: "white",
          }}
        >
          Spin
        </button>
        <div
          id="fix-content-width"
          style={{
            marginLeft: "80px",
            marginRight: "40px",
            width: "60%",
            minWidth: 350,
            display: !isSubmitted ? "block" : "none",
          }}
        >
          <div>
            <h2>Win an Exclusive prize!</h2>
            <p>Enter your full name and email to wheel your luck!</p>
          </div>
          <div style={{ width: "100%" }}>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={onSubmit}
            >
              <input
                id="fullName"
                style={{
                  padding: "14px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
                placeholder="Enter your Name"
                required
              />
              <input
                id="email"
                style={{
                  padding: "14px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "18px",
                }}
                placeholder="Enter your Email"
                required
              />
              <div style={{ display: "flex" }}>
                <input
                  id="isAgreed"
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 2,
                    marginRight: 7,
                  }}
                  className="input-check"
                  type="checkbox"
                  required
                />
                <span>
                  I agree to my personal data being stored and used to receive
                  the newsletter
                </span>
              </div>
              <button type="submit" style={{ marginTop: "20px" }}>
                +{" "}
                <span style={{ textTransform: "uppercase" }}>
                  Wheel Your Luck!!
                </span>
              </button>
            </form>
            <p>89% offers have been claimed. Spin the wheel & win</p>
          </div>
        </div>
        <button
          style={{
            position: "relative",
            top: "-50%",
            left: 0,
            background: "none",
            padding: 0,
            color: "white",
          }}
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default OptInForm;
