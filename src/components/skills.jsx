const Skills = () => {
  const frontendIcons = [
    { src: '../src/assets/tech/front/react-svgrepo-com.svg', alt: 'React' },
    { src: '../src/assets/tech/front/vitejs-svgrepo-com.svg', alt: 'Vite' },
    { src: '../src/assets/tech/front/html-5-svgrepo-com.svg', alt: 'HTML' },
    { src: '../src/assets/tech/front/css-3-svgrepo-com.svg', alt: 'CSS' },
    {
      src: '../src/assets/tech/front/tailwind-svgrepo-com.svg',
      alt: 'Tailwind',
    },
  ];
  const backendIcons = [
    { src: '../src/assets/tech/back/node-svgrepo-com.svg', alt: 'node.js' },
    {
      src: '../src/assets/tech/back/express-svgrepo-com.svg',
      alt: 'express.js',
    },
    {
      src: '../src/assets/tech/back/javascript-svgrepo-com.svg',
      alt: 'JS',
    },
    { src: '../src/assets/tech/back/mongodb-svgrepo-com.svg', alt: 'MongoDB' },
  ];

  return (
    <div className="pt-12 flex gap-60 justify-center">
      {/* Frontend */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-white mb-6">Frontend</h2>
        <div className="flex flex-col gap-6 items-center">
          {frontendIcons.map((icon, idx) => (
            <div
              key={idx}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shadow-black "
            >
              <img src={icon.src} alt={icon.alt} className="w-12 h-12" />
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
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shadow-black"
            >
              <img src={icon.src} alt={icon.alt} className="w-12 h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
