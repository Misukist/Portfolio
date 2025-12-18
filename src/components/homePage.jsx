import { useRef } from 'react';
import Projects from './projectCards';
import Skills from './skills';
import ScrollElement from './scrollEvent.jsx';
import ProfilePic from '../assets/images/Profile.jpg';

import toast from 'react-hot-toast';

const HomePage = () => {
  const notify = () => {
    const id = toast(
      () => (
        <div className="relative bg-[#424955] text-white p-4 rounded-lg w-80">
          <button
            onClick={() => toast.dismiss(id)}
            className="absolute top-2 right-2 text-white font-bold hover:text-gray-300"
          >
            ✕
          </button>
          <span className="block text-center">
            {`"View all" is work in progress.`} 🛠️ <br />
            <br />
            <a
              href="https://github.com/Misukist"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#9178DD]"
            >
              Check my projects on GitHub
            </a>
          </span>
        </div>
      ),
      {
        duration: 3000,
        style: { background: 'transparent', boxShadow: 'none' }, // ← tässä poistat valkoisen wrapperin
        position: 'top-center',
      }
    );
  };

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactsRef = useRef(null);
  const skillsRef = useRef(null);
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      className="bg-[#282C33] px-4 lg:pt-35 lg:px-72 sm:px-10 md:px-10 relative snap-y overflow-y-scroll h-screen snap-mandatory scroll-smooth overflow-hidden"
    >
      <section
        id="home"
        ref={homeRef}
        className=" pt-50 pb-60 sm:px-4 flex flex-row items-center lg:gap-16 gap-2 md:justify-between lg:justify-center snap-start lg:max-w-screen mx-auto "
      >
        <div className="lg:text-4xl md:text-xl sm:text-lg text-sm gap-3 lg:p-14 md:p-7 sm:p-5 font-semibold  flex flex-col ">
          <h1 className="text-white">{`Hello, I'm Mikael a`}</h1>
          <h1 className="text-[#9178DD]">Full Stack Developer</h1>
          <p className="text-[#ABB2BF] lg:text-xl md:text-lg sm:text-sm text-xs lg:pt-9 md:pt-9 sm:pt-4 pt-4 font-normal">
            I help founders turn ideas into seamless <br /> digital experiences
          </p>
          <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-3 pt-7 lg:items-center md:items-center">
            <a href="mailto:misukisti@gmail.com">
              <button className="lg:text-xl md:text-lg sm:text-sm text-xs font-light text-white border-2 lg:py-2 md:py-2 sm:py-1 py-1 lg:px-4 md:px-4 sm:px-2 px-2 border-[#9178DD]  justify-center hover:bg-[#9178DD]">
                Contact me!!
              </button>
            </a>
            <div className=" flex-row flex gap-2">
              <a
                href="https://github.com/Misukist"
                className="text-[#ABB2BF] hover:text-[#9178DD]"
              >
                <svg
                  className="lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-8 sm:h-8 w-8 h-8 "
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mikael-virtanen-71433b304/"
                className="text-[#ABB2BF] hover:text-[#9178DD]"
              >
                <svg
                  className="lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-8 sm:h-8 w-8 h-8 "
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  enableBackground="new 0 0 32 32"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M19.515,11.952c-0.678,0-1.18,0.171-1.573,0.387c-0.063-0.224-0.27-0.388-0.514-0.339h-2.984
                    c-0.295-0.049-0.534,0.19-0.443,0.5v11c-0.091,0.28,0.148,0.52,0.443,0.5h2.984c0.295,0.02,0.534-0.22,0.534-0.515l-0.001-6.648
                    c-0.001-0.003-0.012-0.321,0.189-0.54c0.161-0.174,0.438-0.263,0.821-0.263c0.638,0,0.922,0.261,1.028,0.845v6.606
                    C19.894,23.78,20.133,24.02,20.428,24h3.145c0.295,0.02,0.534-0.22,0.428-0.515v-6.828C24.106,13.185,21.633,11.952,19.515,11.952z
                    M23.038,23h-2.076v-6.121c0-1.181-0.763-1.913-1.99-1.913c-0.694,0-1.234,0.204-1.606,0.606C16.849,16.132,16.889,16.842,17,17v6
                    h-2.022v-9.98h1.916v0.336c0,0.203,0.115,0.39,0.298,0.479c0.183,0.089,0.4,0.067,0.562-0.056l0.14-0.108
                    c0.405-0.319,0.824-0.65,1.622-0.65c0.826,0,3.523,0.263,3.523,3.637V23z"
                    />
                    <path
                      fill="currentColor"
                      d="M11,6.966C9.878,6.966,8.966,7.878,8.966,9S9.878,11.034,11,11.034S13.034,10.122,13.034,9
                    S12.122,6.966,11,6.966z M11,9.966c-0.532,0-0.966-0.434-0.966-0.966S10.468,8.034,11,8.034S11.966,8.468,11.966,9
                    S11.532,9.966,11,9.966z"
                    />
                    <path
                      fill="currentColor"
                      d="M12.428,11.951H9.46c-0.295,0-0.534,0.239-0.46,0.549v11c-0.074,0.28,0.165,0.52,0.46,0.5h2.968
                      c0.295,0.02,0.534-0.22,0.534-0.515v-11C12.962,12.19,12.723,11.951,12.428,11.951z M12,23H9.994v-9.98H12V23z"
                    />
                    <path
                      fill="currentColor"
                      d="M16-0.034C7.158-0.034-0.034,7.158-0.034,16S7.158,32.034,16,32.034S32.034,24.842,32.034,16
                    S24.842-0.034,16-0.034z M16,30.966C7.748,30.966,1.034,24.252,1.034,16S7.748,1.034,16,1.034S30.966,7.748,30.966,16
                    S24.252,30.966,16,30.966z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center">
          <img
            alt="profiilikuva"
            src={ProfilePic}
            className="lg:w-100 md:w-60 sm:w-40 w-35 h-auto rounded-full object-cover  "
          />
          <div className="border-2 lg:py-2 lg:px-4 md:py-2 md:px-4 sm:py-1 sm:px-2 py-1 px-1 border-[#ABB2BF] justify-center  items-center flex gap-3">
            <div className="w-4 h-4 bg-[#9178DD]"></div>
            <p className="lg:text-xl md:text-lg sm:text-sm text-xs font-light text-[#ABB2BF] ">
              Currently working on:
              <span className="font-semibold text-white"> ChatBot </span>
            </p>
          </div>
        </div>
      </section>

      <section id="projects" ref={projectRef} className="pt-30 snap-start">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium text-[#9178DD]">
              #<span className="text-white">projects</span>
            </h1>
            <hr className=" lg:w-200 md:w-150 sm:w-100 w-20 border-t border-[#9178DD]"></hr>
          </div>
          <button
            onClick={notify}
            className="text-white hover:underline flex gap-3 items-center"
          >
            View all{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <Projects></Projects>
      </section>
      <section id="skills" className="pt-30 snap-start">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium text-[#9178DD]">
              #<span className="text-white">skills</span>
            </h1>
            <hr className=" grow border-t border-[#9178DD]"></hr>
          </div>
        </div>
        <Skills></Skills>
      </section>

      <section id="about-me" ref={aboutMeRef} className="pt-30  snap-start ">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium text-[#9178DD]">
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

      <section id="contacts" ref={contactsRef} className="pt-30 snap-start ">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium text-[#9178DD]">
              #<span className="text-white">contact</span>
            </h1>
            <hr className=" grow border-t border-[#9178DD]"></hr>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col pt-13 lg:gap-100 md:gap-50 sm:gap-30 gap-9 justify-between">
          <p className=" px-13 text-[#ABB2BF]">
            I’m always interested in new and exciting projects. If you have any
            questions or ideas, don’t hesitate to get in touch!
          </p>
          <div className="lg:mr-7 lg:px-5 mr-1 py-2 px-2 border h-25 border-[#ABB2BF]">
            <h2 className="text-white font-medium pt-2">Message me here</h2>
            <p className=" flex gap-2 py-2 text-[#ABB2BF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              misukisit@gmail.com
            </p>
          </div>
        </div>
      </section>
      <section className="snap-start">
        <div className="-mx-72">
          <hr className="w-full mt-14 border-t border-white" />
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
              <a
                href="https://github.com/Misukist"
                className="text-black hover:text-[#ABB2BF] pb-4"
              >
                <svg
                  width="35px"
                  height="35px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mikael-virtanen-71433b304/"
                className="text-black hover:text-[#ABB2BF]"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 32 32"
                  enableBackground="new 0 0 32 32"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M19.515,11.952c-0.678,0-1.18,0.171-1.573,0.387c-0.063-0.224-0.27-0.388-0.514-0.339h-2.984
                    c-0.295-0.049-0.534,0.19-0.443,0.5v11c-0.091,0.28,0.148,0.52,0.443,0.5h2.984c0.295,0.02,0.534-0.22,0.534-0.515l-0.001-6.648
                    c-0.001-0.003-0.012-0.321,0.189-0.54c0.161-0.174,0.438-0.263,0.821-0.263c0.638,0,0.922,0.261,1.028,0.845v6.606
                    C19.894,23.78,20.133,24.02,20.428,24h3.145c0.295,0.02,0.534-0.22,0.428-0.515v-6.828C24.106,13.185,21.633,11.952,19.515,11.952z
                    M23.038,23h-2.076v-6.121c0-1.181-0.763-1.913-1.99-1.913c-0.694,0-1.234,0.204-1.606,0.606C16.849,16.132,16.889,16.842,17,17v6
                    h-2.022v-9.98h1.916v0.336c0,0.203,0.115,0.39,0.298,0.479c0.183,0.089,0.4,0.067,0.562-0.056l0.14-0.108
                    c0.405-0.319,0.824-0.65,1.622-0.65c0.826,0,3.523,0.263,3.523,3.637V23z"
                    />
                    <path
                      fill="currentColor"
                      d="M11,6.966C9.878,6.966,8.966,7.878,8.966,9S9.878,11.034,11,11.034S13.034,10.122,13.034,9
                    S12.122,6.966,11,6.966z M11,9.966c-0.532,0-0.966-0.434-0.966-0.966S10.468,8.034,11,8.034S11.966,8.468,11.966,9
                    S11.532,9.966,11,9.966z"
                    />
                    <path
                      fill="currentColor"
                      d="M12.428,11.951H9.46c-0.295,0-0.534,0.239-0.46,0.549v11c-0.074,0.28,0.165,0.52,0.46,0.5h2.968
                      c0.295,0.02,0.534-0.22,0.534-0.515v-11C12.962,12.19,12.723,11.951,12.428,11.951z M12,23H9.994v-9.98H12V23z"
                    />
                    <path
                      fill="currentColor"
                      d="M16-0.034C7.158-0.034-0.034,7.158-0.034,16S7.158,32.034,16,32.034S32.034,24.842,32.034,16
                    S24.842-0.034,16-0.034z M16,30.966C7.748,30.966,1.034,24.252,1.034,16S7.748,1.034,16,1.034S30.966,7.748,30.966,16
                    S24.252,30.966,16,30.966z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <footer className="text-[#ABB2BF] pb-3 lg:pt-0 md:pt-0 sm:pt-5 pt-5  flex justify-center text-center">
          Design inspired by Elias. Contact: elias@elias.me
        </footer>
      </section>

      <div className="absolute top-[50%] left-0 h-36 w-28 border border-[#ABB2BF] border-l-0 transition-all duration-500 ease-in-out hidden lg:block"></div>

      <ScrollElement
        homeRef={homeRef}
        projectRef={projectRef}
        skillsRef={skillsRef}
        aboutMeRef={aboutMeRef}
        contactsRef={contactsRef}
        scrollContainerRef={scrollRef}
      />
    </div>
  );
};

export default HomePage;
