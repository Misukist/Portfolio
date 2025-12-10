import GithubIcon from '../assets/images/github-svgrepo-com.svg';
import LinkedinIcon from '../assets/images/linkedin-svgrepo-com.svg';
import Projects from './projectCards';

const HomePage = () => {
  return (
    <div className="bg-[#282C33] min-h-screen py-35 px-72 ">
      <section
        id="home"
        className=" pt-20 flex flex-row items-center gap-16 md:justify-between lg:justify-center"
      >
        <div className="text-4xl gap-3 p-14 font-semibold  flex flex-col">
          <h1 className="text-white">Hello, I'm Mikael a</h1>
          <h1 className="text-[#9178DD]">Full Stack Developer</h1>
          <p className="text-[#ABB2BF] text-xl pt-9 font-normal">
            I help founders turn ideas into seamless <br /> digital experiences
          </p>
          <div className="flex gap-3 pt-7 items-center">
            <button className="text-xl font-light text-white border-2 py-2 px-4 border-[#9178DD]  justify-center">
              Contact me!!
            </button>
            <a className="">
              <img src={GithubIcon} className="w-9 h-auto" />
            </a>
            <a className="">
              <img src={LinkedinIcon} className="w-9 h-auto" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <img
            src="../src/assets/images/Profile.jpg"
            className="w-100 h-100 rounded-full object-cover  "
          />
          <div className="border-2 py-2 px-4 border-[#ABB2BF] justify-center  items-center flex gap-3">
            <div className="w-4 h-4 bg-[#9178DD]"></div>
            <p className="text-xl font-light text-[#ABB2BF] ">
              Currently working on:
              <span className="font-semibold text-white"> Portfolio </span>
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="pt-100 ">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-medium text-[#9178DD]">
              #<span className="text-white">projects</span>
            </h1>
            <hr className=" w-200 border-t border-[#9178DD]"></hr>
          </div>
          <a className="text-white hover:underline flex gap-3 items-center">
            View all{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
        <Projects></Projects>
      </section>
    </div>
  );
};

export default HomePage;
