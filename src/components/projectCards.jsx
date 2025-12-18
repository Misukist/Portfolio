import xclone from '../assets/showcase/x-clone1.png';
import pokemon from '../assets/showcase/Pokemon.png';
import weather from '../assets/showcase/weatherApp.png';

const Projects = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-col justify-between items-center">
      <div className="lg:w-120 md:w-120 sm:w-90 w-80 pt-12 mx-2">
        <div className="aspect-video overflow-hidden border border-[#ABB2BF]">
          <a href="https://github.com/Misukist/X-Clone">
            <img
              alt="X-clone"
              src={xclone}
              className="w-full h-full scale-130 object-cover hover:scale-140 transition-transform duration-300 ease-in-out"
            ></img>
          </a>
        </div>
        <p className="px-2 py-1 border-b border-x border-[#ABB2BF] text-lg font-light text-[#ABB2BF] ">
          React tailwind-css Node.js MongoDB Cloudinary
        </p>
        <div className=" pl-5 py-3 pt-5 border-b border-x  border-[#ABB2BF] ">
          <h3 className="text-white text-2xl font-medium"> X-Clone </h3>
          <p className=" pt-2 text-base font-light text-[#ABB2BF]">
            {' '}
            Social media platform{' '}
          </p>
          <div className="pt-4 pb-6 flex ">
            <a href="https://x-clone-2pfe.onrender.com/">
              <button className="px-4 py-2 mr-5 flex border text-white border-[#9178DD] items-center hover:bg-[#9178DD]">
                Live
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </a>
            <a href="https://github.com/Misukist/X-Clone">
              <button className="px-4 py-2 flex border text-[#ABB2BF] border-[#ABB2BF] items-center hover:bg-[#ABB2BF] hover:text-white hover:border-white">
                Github{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="lg:w-120 md:w-120 sm:w-90 w-80 pt-12 mx-2">
        <div className="aspect-video overflow-hidden border border-[#ABB2BF]">
          <a href="https://github.com/Misukist/PokemonSovellus">
            <img
              alt="Pokemon"
              src={pokemon}
              className="w-full h-full  object-cover hover:scale-110 transition-transform duration-300 ease-in-out "
            ></img>
          </a>
        </div>
        <p className="px-2 py-1 border-b border-x border-[#ABB2BF] text-lg font-light text-[#ABB2BF] ">
          React tailwind-css JWT Node.js MongoDB Pokemon-API
        </p>
        <div className=" pl-5 py-3 pt-5 border-b border-x  border-[#ABB2BF] ">
          <h3 className="text-white text-2xl font-medium">
            {' '}
            Pokecard Collection{' '}
          </h3>
          <p className=" pt-2 text-base font-light text-[#ABB2BF]">
            {' '}
            Make your own collection{' '}
          </p>
          <div className="pt-4 pb-6 flex ">
            <a href="https://pokemonsovellus.onrender.com/">
              <button className="px-4 py-2 mr-5 flex border text-white border-[#9178DD] items-center hover:bg-[#9178DD]">
                Live
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </a>
            <a href="https://github.com/Misukist/PokemonSovellus">
              <button className="px-4 py-2 flex border text-[#ABB2BF] border-[#ABB2BF] items-center hover:bg-[#ABB2BF] hover:text-white hover:border-white">
                Github{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="lg:w-120 md:w-120 sm:w-90 w-80 pt-12 pb-20 lg:pb-0 md:pb-0 sm:pb-15 mx-2">
        <div className="aspect-video overflow-hidden border border-[#ABB2BF]">
          <a href="https://github.com/Misukist/WeatherApp">
            <img
              alt="weather app"
              src={weather}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
            ></img>
          </a>
        </div>
        <p className="px-2 py-1 border-b border-x border-[#ABB2BF] text-lg font-light text-[#ABB2BF] ">
          React css HTML Node.js Weather-API
        </p>
        <div className=" pl-5 py-3 pt-5 border-b border-x  border-[#ABB2BF] ">
          <h3 className="text-white text-2xl font-medium"> Weather App </h3>
          <p className=" pt-2 text-base font-light text-[#ABB2BF]">
            {' '}
            Search weather by country{' '}
          </p>
          <div className="pt-4 pb-6 flex ">
            <a href="https://github.com/Misukist/WeatherApp">
              <button className="px-4 py-2 flex border text-white border-[#ABB2BF] items-center hover:bg-[#ABB2BF] hover:text-white hover:border-white">
                Github{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
