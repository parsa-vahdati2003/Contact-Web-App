function header() {
  return (
    <header className="my-12.5 text-center flex flex-col gap-3">
      <h1 className="text-base text-4xl font-medium">Contact App</h1>

      <p className="text-secondry flex gap-1  justify-center">
        {/* <img src="" alt="" /> */}
        <a
          className="transition-all py-0.75 px-1.25 rounded-[5px]   bg-lightBlue hover:bg-base hover:text-lightBlue"
          target="_blank"
          href="https://github.com/parsa-vahdati2003?tab=repositories"
        >
          My GitHub
        </a>
        | You can see other Projects
      </p>
    </header>
  );
}

export default header;
