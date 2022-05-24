import React from "react";

const Signup = () => {
  const [data, dataF] = React.useState({
    email: "",
    password: "",
    cpassword: "",
    checkboxx: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    dataF((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (data.password === data.cpassword) {
      console.log(data);
    } else {
      console.log("Passwords do no match");
      return
    }

    if (data.checkboxx === true) {
        console.log("TD Apply");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={data.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={data.password}
      />
      <input
        type="password"
        name="cpassword"
        placeholder="Confirm Password"
        onChange={handleChange}
        value={data.cpassword}
      />
      <input
        type="checkbox"
        name="checkboxx"
        id="checkbox"
        checked={data.checkboxx}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">T and D?</label>

      <button>Sign Up</button>
    </form>
  );
};

export default Signup;
