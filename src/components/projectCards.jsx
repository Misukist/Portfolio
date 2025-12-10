const Projects = () => {
  return (
    <div className="flex">
      <div className="w-120 pt-12 mx-2">
        <div className="aspect-video overflow-hidden border border-[#ABB2BF]">
          <img
            src="../src/assets/showcase/x-clone1.png"
            className="w-full h-full scale-130 object-cover"
          ></img>
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
            <button className="px-4 py-2 mr-5 flex border text-white border-[#9178DD] items-center">
              Live
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            <button className="px-4 py-2 flex border text-[#ABB2BF] border-[#ABB2BF] items-center">
              Github{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-120 pt-12 mx-2">
        <div className="aspect-video overflow-hidden border border-[#ABB2BF]">
          <img
            src="../src/assets/showcase/Pokemon.png"
            className="w-full h-full  object-cover"
          ></img>
        </div>
        <p className="px-2 py-1 border-b border-x border-[#ABB2BF] text-lg font-light text-[#ABB2BF] ">
          React tailwind-css JWT Node.js MongoDB Pokemon-API
        </p>
        <div className=" pl-5 py-3 pt-5 border-b border-x  border-[#ABB2BF] ">
          <h3 className="text-white text-2xl font-medium"> X-Clone </h3>
          <p className=" pt-2 text-base font-light text-[#ABB2BF]">
            {' '}
            Pokecard collection app{' '}
          </p>
          <div className="pt-4 pb-6 flex ">
            <button className="px-4 py-2 mr-5 flex border text-white border-[#9178DD] items-center">
              Live
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            <button className="px-4 py-2 flex border text-[#ABB2BF] border-[#ABB2BF] items-center">
              Github{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-120 pt-12 mx-2">
        <div className="aspect-video overflow-hidden border border-[#ABB2BF]">
          <img
            src="../src/assets/showcase/weatherApp.png"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <p className="px-2 py-1 border-b border-x border-[#ABB2BF] text-lg font-light text-[#ABB2BF] ">
          React css HTML Node.js Weather-API
        </p>
        <div className=" pl-5 py-3 pt-5 border-b border-x  border-[#ABB2BF] ">
          <h3 className="text-white text-2xl font-medium"> X-Clone </h3>
          <p className=" pt-2 text-base font-light text-[#ABB2BF]">
            {' '}
            Social media platform{' '}
          </p>
          <div className="pt-4 pb-6 flex ">
            <button className="px-4 py-2 flex border text-white border-[#ABB2BF] items-center">
              Github{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
