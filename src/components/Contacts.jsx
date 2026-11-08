// ilbrary
import { useState } from "react";

// components
import ContactsList from "./ContactsList";

// uuid library
import { v4 } from "uuid";

// map input
const inputs = [
  {
    type: "text",
    name: "name",
    placeholder: "Name",
  },
  {
    type: "text",
    name: "lastName",
    placeholder: "Last Name",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email",
  },
  {
    type: "number",
    name: "phone",
    placeholder: "phone",
  },
];
// main component
function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // console.log({ name, value });

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    // setAlert
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please Enter Valid Data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    // setContacts
    setContacts((contacts) => [...contacts, newContact]);
    //setContact
    setContact({
      //1
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    console.log(contacts);
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-wrap items-center justify-center p-5   gap-6 shadow-[0_10px_36px_#304ffe25]">
        {inputs.map((input, index) => {
          return (
            <input
              className="transition-all border-2 border-[#eaeaea] rounded-2xl w-[90%] xs:w-[45%] h-10 p-2.5 text-base text-lg hover:shadow-[0_7px_29px_#0c2ad487]"
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={contact[input.name]}
              onChange={changeHandler}
            />
          );
        })}
        {/* <input
          type="text"
          placeholder="Name"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={contact.lastName}
          onChange={changeHandler}
        />

        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />

        <input
          type="number"
          placeholder="Enter your Phone"
          name="phone"
          value={contact.phone}
          onChange={changeHandler}
        /> */}
        {/* border-2 border-[#eaeaea] rounded-xl bg-base p-5  */}
        <button
          className="transition-all border-0  border-[#eaeaea] rounded-2xl w-[90%] xs:w-[calc(90%+20px)]  p-2.5 text-white  text-lg bg-base hover:shadow-[0_7px_29px_#0c2ad487] "
          type="button"
          onClick={addHandler}
        >
          Add Contact
        </button>
      </div>
      <div className="w-full h-10 mt-1 mb-6 ">
        {alert ? (
          <p className="bg-alertBg text-alert w-full p-2.5 rounded-xl">
            {alert}
          </p>
        ) : (
          ""
        )}
      </div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
