const NavBar = () => {
  return (
    <div className="bg-[#282C33] fixed flex space-x-10 justify-center w-full py-6">
      <a href="#" className="flex group">
        <p className="text-[#9178DD] group-hover:text-white">#</p>
        <p className="text-[#ABB2BF] group-hover:text-white">home</p>
      </a>
      <a href="#" className="flex group">
        <span className="text-[#9178DD] group-hover:text-white ">#</span>
        <span className="text-[#ABB2BF]  group-hover:text-white ">works</span>
      </a>
      <a href="#" className="flex group">
        <p className="text-[#9178DD] group-hover:text-white">#</p>
        <p className="text-[#ABB2BF] group-hover:text-white">about-me</p>
      </a>
      <a href="#" className="flex group">
        <p className="text-[#9178DD] group-hover:text-white">#</p>
        <p className="text-[#ABB2BF] group-hover:text-white">contacts</p>
      </a>
    </div>
  );
};

export default NavBar;
