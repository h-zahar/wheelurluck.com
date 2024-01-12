import { useState } from "react";

interface SpinnerInfo {
  id: string;
  discountValue: number;
  discountType: string;
  discountColor?: string;
}
interface CustomElements extends HTMLFormControlsCollection {
  discountValue: HTMLInputElement;
  discountType: HTMLInputElement;
  discountColor: HTMLInputElement;
}
interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
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

  const onSubmit = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;

    const data = {
      id: new Date().getTime().toString(),
      discountValue: Number(target.discountValue.value),
      discountType: Number(target.discountType.value) === 1 ? "%" : "Fixed",
      discountColor: target.discountColor.value,
    };
    setSpinnerInfo([...spinnernfo, data]);
  };

  return (
    <div>
      <h2 style={{ fontWeight: "normal" }}>Spinner Settings</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          style={{ display: "flex", gap: "8px", marginBottom: 50 }}
          onSubmit={onSubmit}
        >
          <input
            id="discountValue"
            style={{ width: 70, padding: "0 12px" }}
            placeholder="Discount"
            type="number"
            required
          />
          <select
            id="discountType"
            defaultValue={1}
            style={{ padding: "0 10px" }}
            required
          >
            <option value={0} disabled>
              Type
            </option>
            <option value={1} selected>
              %
            </option>
            <option value={2}>Fixed</option>
          </select>
          {/* <input style={{ width: 20, padding: 5 }} placeholder="Color" /> */}
          <input
            id="discountColor"
            type="color"
            className="custom-picker"
            style={{
              cursor: "pointer",
            }}
            defaultValue="#5896c6"
            required
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
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
