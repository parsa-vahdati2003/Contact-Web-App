import ContactItem from "./ContactItem";
//
function ContactsList({ contacts, deleteHandler }) {
  return (
    <div className="w-full flex flex-col gap-15 p-5">
      <h3 className="text-base text-2xl font-bold  ">Contact List</h3>
      {contacts.length ? (
        <ul className="border-2 border-solid  border-[#f5f5f5] shadow-[0_10px_36px_#304ffe25]  list-none mt-5 p-5 rounded-[20px] flex flex-col gap-6">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              dataProp={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className="bg-[#f5f5f5] h-25 text-center mt-5 rounded-xl color-[#6b6b6f] text-2xl font-medium p-10">
          No contacts Yet!
        </p>
      )}
    </div>
  );
}

export default ContactsList;
