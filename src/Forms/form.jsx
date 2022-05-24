import React from "react";

const Forms = () => {
  const [data, dataF] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    textArea: "",
    checkbox: true,
  });

  function handleChange(event) {
    dataF((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
    // console.log(data);
  }

  function handleSubmit(event) {
      event.preventDefault()

      console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="Firstname"
        onChange={handleChange}
        value={data.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="lastname"
        onChange={handleChange}
        value={data.lastName}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={data.email}
      />
      <textarea
        name="textArea"
        placeholder="comments"
        cols="15"
        rows="4"
        value={data.textArea}
        onChange={handleChange}
      />
      <input
        className="nn"
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={data.checkbox}
      />
      <label htmlFor="checkbox">Are you Friendly?</label>
    <button>Submit</button>
    </form>
  );
};

export default Forms;
