import Icon from "../assets/images/wheel.png";

const OptInForm = () => {
  return (
    <div
      style={{
        marginTop: 50,
        color: "white",
        textAlign: "start",
        position: "absolute",
        top: 0,
        left: 0,
        height: "calc(100% - 120px)",
        minWidth: "30vw",
        maxWidth: "55vw",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "35px 50px 50px 0",
          background: "rgb(45 133 250)",
          alignItems: "center",
        }}
      >
        <div style={{ width: "40%" }}>
          <img src={Icon} width={"100%"} />
        </div>
        <div style={{ marginLeft: "80px", marginRight: "40px", width: "60%" }}>
          <div>
            <h2>Win an Exclusive prize!</h2>
            <p>Enter your full name and email to wheel your luck!</p>
          </div>
          <div style={{ width: "100%" }}>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <input
                style={{
                  padding: "14px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
                placeholder="Enter your Name"
              />
              {/* <br /> */}
              <input
                style={{
                  padding: "14px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "18px",
                }}
                placeholder="Enter your Email"
              />
              {/* <br /> */}
              <div style={{ display: "flex" }}>
                <input
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 2,
                    marginRight: 7,
                  }}
                  className="input-check"
                  type="checkbox"
                />
                <span>
                  I agree to my personal data being stored and used to receive
                  the newsletter
                </span>
              </div>
              {/* <br /> */}
              <button style={{ marginTop: "20px" }}>
                +{" "}
                <span style={{ textTransform: "uppercase" }}>
                  Wheel Your Luck!!
                </span>
              </button>
            </form>
            <p>89% offers have been claimed. Spin the wheel & win</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptInForm;
