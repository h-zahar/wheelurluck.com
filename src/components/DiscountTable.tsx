import React, { SetStateAction, useState } from "react";

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
  setDiscountInfo: React.Dispatch<SetStateAction<DiscountInfo[]>>;
  currentCustomers: CurrentCustomers[];
}) => {
  console.log(discountInfo);
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

        {discountInfo.map((discount, i) => {
          return (
            <>
              <div
                style={{
                  background: "#cccccc",
                  padding: "8px 20px",
                  textAlign: "start",
                }}
              >
                {discount.customerEmail}
              </div>
              <div
                style={{
                  background: "#efefef",
                  padding: "8px 30px",
                  textAlign: "start",
                }}
              >
                {discount.customerName}
              </div>
              <div
                style={{
                  background: "#f8fff5",
                  padding: "8px 20px",
                }}
              >
                {discount.discountValue + " " + discount.discountType}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DiscountTable;
