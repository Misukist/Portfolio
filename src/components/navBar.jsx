const NavBar = () => {
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    homeSection?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-[#282C33] fixed top-0 z-50 flex lg:space-x-10 md:space-x-10 sm:space-x-7 space-x-5 justify-center w-full py-6 lg:text-xl md:text-xl sm:text-sm pb-1 ">
      <a href="#home" className="flex group">
        <p className="text-[#9178DD] group-hover:text-white">#</p>
        <p className="text-[#ABB2BF] group-hover:text-white">home</p>
      </a>
      <a href="#projects" className="flex group">
        <span className="text-[#9178DD] group-hover:text-white ">#</span>
        <span className="text-[#ABB2BF]  group-hover:text-white ">works</span>
      </a>
      <a href="#about-me" className="flex group">
        <p className="text-[#9178DD] group-hover:text-white">#</p>
        <p className="text-[#ABB2BF] group-hover:text-white">about-me</p>
      </a>
      <a href="#contacts" className="flex group">
        <p className="text-[#9178DD] group-hover:text-white">#</p>
        <p className="text-[#ABB2BF] group-hover:text-white">contacts</p>
      </a>
    </div>
  );
};

export default NavBar;
