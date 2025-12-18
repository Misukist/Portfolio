const Skills = () => {
  const frontendIcons = [
    { src: '/react-svgrepo-com.svg', alt: 'React' },
    { src: '/vitejs-svgrepo-com.svg', alt: 'Vite' },
    { src: '/html-5-svgrepo-com.svg', alt: 'HTML' },
    { src: '/css-3-svgrepo-com.svg', alt: 'CSS' },
    {
      src: '/tailwind-svgrepo-com.svg',
      alt: 'Tailwind',
    },
  ];
  const backendIcons = [
    { src: '/node-svgrepo-com.svg', alt: 'node.js' },
    {
      src: '/express-svgrepo-com.svg',
      alt: 'express.js',
    },
    {
      src: '/javascript-svgrepo-com.svg',
      alt: 'JS',
    },
    { src: '/mongodb-svgrepo-com.svg', alt: 'MongoDB' },
  ];

  return (
    <div className="pt-12 flex lg:gap-60 md:gap-40 sm:gap-20 gap-20 justify-center">
      {/* Frontend */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-white mb-6">Frontend</h2>
        <div className="flex flex-col gap-6 items-center">
          {frontendIcons.map((icon, idx) => (
            <div
              key={idx}
              className="lg:w-20 md:w-20 sm:w-15 w-15  lg:h-20 md:h-20 sm:h-15 h-15  bg-white rounded-full flex items-center justify-center lg:shadow-lg md:shadow-lg sm:shadow-md shadow-md shadow-black "
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="lg:w-12 md:w-12 sm:w-10 w-10 lg:h-12 md:h-12 sm:h-10 h-10"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-white mb-6">Backend</h2>
        <div className="flex flex-col gap-6 items-center">
          {backendIcons.map((icon, idx) => (
            <div
              key={idx}
              className="lg:w-20 md:w-20 sm:w-15 w-15  lg:h-20 md:h-20 sm:h-15 h-15 bg-white rounded-full flex items-center justify-center lg:shadow-lg md:shadow-lg sm:shadow-md shadow-md shadow-black"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="lg:w-12 md:w-12 sm:w-10 w-10 lg:h-12 md:h-12 sm:h-10 h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
