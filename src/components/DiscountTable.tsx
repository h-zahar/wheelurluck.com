import { useState } from "react";

interface DiscountInfo {
  id: string;
  customerEmail: string;
  customerName: string;
  discountValue: number;
  discountType: string;
  discountColor?: string;
}

const DiscountTable = () => {
  const [discountInfo, setDiscountInfo] = useState<DiscountInfo[] | []>([
    {
      id: "123",
      customerEmail: "khb",
      customerName: "akhsbd",
      discountValue: 40,
      discountType: "Fixed",
      discountColor: "red",
    },
    {
      id: "132",
      customerEmail: "khb",
      customerName: "akhsbd",
      discountValue: 80,
      discountType: "Fixed",
      discountColor: "red",
    },
  ]);

  return (
    <div>
      <h2 style={{ fontWeight: "normal" }}>Email list</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "4fr 2fr 1fr",
          //   width: 360,
          fontSize: "0.95remrem",
        }}
      >
        <div
          style={{
            background: "#cccccc",
            fontWeight: 500,
            padding: "15px 2px",
          }}
        >
          {"Name"}
        </div>
        <div
          style={{
            background: "#efefef",
            fontWeight: 500,
            padding: "15px 2px",
          }}
        >
          {"Email"}
        </div>
        <div
          style={{
            background: "#f8fff5",
            fontWeight: 500,
            padding: "15px 2px",
          }}
        >
          {"Discount"}
        </div>

        {discountInfo.map((discount) => {
          return Object.keys(discount).map((d) => {
            return (
              (d === "customerName" ||
                d === "customerEmail" ||
                d === "discountValue") &&
              (d !== "discountValue" ? (
                <div
                  style={
                    d === "customerName"
                      ? { background: "#efefef", padding: "8px 2px" }
                      : { background: "#cccccc", padding: "8px 2px" }
                  }
                >
                  {discount[d]}
                </div>
              ) : (
                <div
                  style={{
                    background: "#f8fff5",
                    padding: "8px 20px",
                  }}
                >
                  {`${discount["discountValue"]} ${discount["discountType"]}`}
                </div>
              ))
            );
          });
        })}
      </div>
    </div>
  );
};

export default DiscountTable;
