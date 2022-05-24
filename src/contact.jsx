import React from "react";
import "./contactcss.css";

const Contact = () => {
  const [contact, contactFunction] = React.useState({
    firstname: "John",
    lastname: "Doe",
    phone: "0988993",
    isFavorite: false,
  });

 
//   let anwer = "Hh"

//   if (contact.isFavorite === true) {
//     anwer = "Favourite"
//   }
//   else{
//       anwer = "Not Favorite"
//   }

 let anwer = contact.isFavorite === true ? "Favourite" : "Not Favorite"
  

  

  function favorite() {
    contactFunction(prevState => {
        return {
            ...contact,
            isFavorite: !prevState.isFavorite
        }
    })
  }

  return (
    <div className="contactcontainer">
      <p onClick={favorite}>{anwer}</p>
      <h3>
        {contact.firstname} {contact.lastname}
      </h3>
      <p>{contact.phone}</p>
    </div>
  );
};

export default Contact;
