import { useState } from "react";

interface SpinnerInfo {
  id: string;
  discountValue: number;
  discountType: string;
  discountColor?: string;
}

const SpinnerSettings = () => {
  const [spinnernfo, setSpinnerInfo] = useState<SpinnerInfo[] | []>([
    {
      id: "123",
      discountValue: 40,
      discountType: "Fixed",
      discountColor: "red",
    },
    {
      id: "132",
      discountValue: 80,
      discountType: "Fixed",
      discountColor: "blue",
    },
    {
      id: "142",
      discountValue: 90,
      discountType: "%",
      discountColor: "green",
    },
    {
      id: "152",
      discountValue: 200,
      discountType: "Fixed",
      discountColor: "yellow",
    },
  ]);
  return (
    <div>
      <h2 style={{ fontWeight: "normal" }}>Spinner Settings</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {spinnernfo.map((info) => {
              return (
                <div
                  style={{
                    background: "#d9d9d9",
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 20px",
                  }}
                >
                  {info.discountValue}
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {spinnernfo.map((info) => {
              return (
                <div
                  style={{
                    background: "#d9d9d9",
                    height: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0 20px",
                  }}
                >
                  {info.discountType}
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {spinnernfo.map((info) => {
              return (
                <div
                  style={{
                    background: `${info.discountColor}`,
                    width: 30,
                    height: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* {info.discountType} */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinnerSettings;
