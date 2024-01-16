import { useState } from "react";

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

const DiscountTable = ({
  discountInfo,
  setDiscountInfo,
  currentCustomers,
}: {
  discountInfo: DiscountInfo[] | [];
  setDiscountInfo: (discount: DiscountInfo[] | []) => void;
  currentCustomers: CurrentCustomers[];
}) => {
  return (
    <div>
      <h2 style={{ fontWeight: "normal" }}>Email list</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "4fr 2fr 1fr",
          //   width: 360,
          color: "#213547",
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

        {currentCustomers.map((customer, i) => {
          return (
            <>
              <div>{customer.customerName}</div>
              <div>{customer.customerEmail}</div>
              <div>
                {" "}
                {discountInfo.length === currentCustomers.length
                  ? discountInfo[i].discountValue +
                    " " +
                    discountInfo[i].discountType
                  : "Loading"}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DiscountTable;
