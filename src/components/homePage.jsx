import GithubIcon from '../assets/images/github-svgrepo-com.svg';
import LinkedinIcon from '../assets/images/linkedin-svgrepo-com.svg';
import Projects from './projectCards';
import Skills from './skills';

const HomePage = () => {
  return (
    <div className="bg-[#282C33] min-h-screen pt-35 px-72  ">
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

      <section id="projects" className="pt-70 ">
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
      <section id="skills" className="pt-30 ">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-3xl font-medium text-[#9178DD]">
              #<span className="text-white">skills</span>
            </h1>
            <hr className=" grow border-t border-[#9178DD]"></hr>
          </div>
        </div>
        <Skills></Skills>
      </section>

      <section id="about-me" className="pt-30 ">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-3xl font-medium text-[#9178DD]">
              #<span className="text-white">about-me</span>
            </h1>
            <hr className=" grow border-t border-[#9178DD]"></hr>
          </div>
        </div>
        <p className="pt-13 px-13 text-[#ABB2BF]">
          Hello, I’m Mikael! <br /> <br /> I’m a Computer Science engineer from
          Tampere, Finland. I initially specialized in graphics, 3D, and UI/UX
          design, but over time I’ve expanded my skills to full-stack
          development, as web development has become a major passion of mine. I
          create responsive, modern websites that combine design, functionality,
          and seamless user experiences. <br />
          <br /> Turning my creativity and technical knowledge into polished web
          applications has been my focus for several years. I enjoy building
          projects that integrate design and technology, and I’m always eager to
          learn new frameworks and tools to stay at the forefront of web
          development.
        </p>
      </section>

      <section id="contacts" className="pt-30 ">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-3xl font-medium text-[#9178DD]">
              #<span className="text-white">contact</span>
            </h1>
            <hr className=" grow border-t border-[#9178DD]"></hr>
          </div>
        </div>
        <div className="flex pt-13 gap-100 justify-between">
          <p className=" px-13 text-[#ABB2BF]">
            I’m always interested in new and exciting projects. If you have any
            questions or ideas, don’t hesitate to get in touch!
          </p>
          <div className="mr-7 py-2 px-5 border border-[#ABB2BF]">
            <h2 className="text-white font-medium pt-2">Message me here</h2>
            <p className=" flex gap-2 py-2 text-[#ABB2BF]">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              misukisit@gmail.com
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="-mx-72">
          <hr className="w-screen mt-14 border-t border-white" />
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-[#ABB2BF] pt-14">
              <span className="text-[#9178DD]">#</span>Mikael Virtanen
            </p>
            <p className="text-white pt-2">Fullstack designer</p>
          </div>
          <div className=" pt-14">
            <h2 className="text-2xl flex text-white font-semibold">Media</h2>
            <div className="flex justify-center gap-2 pt-2">
              <a className="">
                <img src={GithubIcon} className="w-9 h-auto" />
              </a>
              <a className="">
                <img src={LinkedinIcon} className="w-9 h-auto" />
              </a>
            </div>
          </div>
        </div>
        <footer className="text-[#ABB2BF] pb-3 flex justify-center">
          Design inspired by Elias. Contact: elias@elias.me
        </footer>
      </section>
    </div>
  );
};

export default HomePage;
