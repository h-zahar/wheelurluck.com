const OptInForm = () => {
  return (
    <div
      style={{
        marginTop: 50,
        background: "rgb(45 133 250)",
        color: "white",
        textAlign: "start",
      }}
    >
      <div>
        <h2>Win an Exclusive prize!</h2>
        <p>Enter your full name and email to wheel your luck!</p>
      </div>
      <div>
        <form>
          <input placeholder="Enter your Name" />
          <br />
          <input placeholder="Enter your Email" />
          <br />
          <input type="checkbox" />
          <span>
            I agree to my personal data being stored and used to receive the
            newsletter
          </span>
          <br />
          <button>
            +{" "}
            <span style={{ textTransform: "uppercase" }}>
              Wheel Your Luck!!
            </span>
          </button>
        </form>
        <p>89% offers have been claimed. Spin the wheel & win</p>
      </div>
    </div>
  );
};

export default OptInForm;
