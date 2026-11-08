function ContactItem({
  dataProp: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  // //
  //   flex-direction: column;
  //   align-items: self-start;
  return (
    <li className=" py-2 flex flex-col xs:flex-row justify-between items-center bg-[#f5f5f5] text-[#6b6b6f] gap-2.5 border-b border-[#6b6b6f]   ">
      <p className="basis-0 grow lg:text-2xl text-lg  ">
        {name} {lastName}
      </p>
      <p className="basis-0 grow ">
        <span className=" inline-block text-lg text-center mr-2.5 bg-white border rounded-[999px] border-white xs:text-[13px] x:text-xl  ">
          📬{email}
        </span>
      </p>
      <p className="basis-0 grow">
        <span className="text-[15px] inline-block text-lg text-center mr-2.5 bg-white border rounded-[999px] border-white  ">
          📞 {phone}
        </span>
      </p>
      <button
        className="transition-all transition-scale duration-500 size-8  bg-white border rounded-[999px] border-white cursor-pointer hover:scale-140 xs:hover:scale-125 hover:bg-alertBg "
        onClick={() => deleteHandler(id)}
        type="button"
      >
        🗑️
      </button>
    </li>
  );
}

export default ContactItem;
