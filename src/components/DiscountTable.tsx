import { useState } from "react";

interface DiscountInfo {
  id: string;
  customerEmail: string;
  customerName: string;
  discountId: string;
  discountValue: number;
  discountType: string;
  discountColor?: string;
}

const DiscountTable = () => {
  const [discountInfo, setDiscountInfo] = useState<DiscountInfo[] | []>([
    {
      id: "321",
      customerEmail: "jdoe@jom.com",
      customerName: "John Doe",
      discountId: "123",
      discountValue: 40,
      discountType: "Fixed",
      discountColor: "red",
    },
    {
      id: "231",
      customerEmail: "alexgood@gmail.com",
      customerName: "Alex Good",
      discountId: "132",
      discountValue: 80,
      discountType: "Fixed",
      discountColor: "blue",
    },
    {
      id: "131",
      customerEmail: "john@hoiburg.com",
      customerName: "Jonathan Hoiburg",
      discountId: "142",
      discountValue: 90,
      discountType: "%",
      discountColor: "green",
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
          {"Email"}
        </div>
        <div
          style={{
            background: "#efefef",
            fontWeight: 500,
            padding: "15px 2px",
          }}
        >
          {"Name"}
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
                      ? {
                          background: "#efefef",
                          padding: "8px 20px",
                          textAlign: "start",
                        }
                      : {
                          background: "#cccccc",
                          padding: "8px 30px",
                          textAlign: "start",
                        }
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
