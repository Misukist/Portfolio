import { useState, useEffect } from 'react';

const DotGrid = ({ columns = 5 }) => {
  const rows = 5;
  const dotSize = 6;
  const gap = 18;

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, ${dotSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${dotSize}px)`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: rows * columns }).map((_, i) => (
        <span
          key={i}
          className="bg-[#9178DD] rounded-full"
          style={{ width: dotSize, height: dotSize }}
        />
      ))}
    </div>
  );
};

const ScrollElement = ({
  homeRef,
  projectRef,
  skillsRef,
  aboutMeRef,
  contactsRef,
  scrollContainerRef,
}) => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    {
      id: 'home',
      ref: homeRef,
      box: {
        width: 112,
        height: 130,
        topOffset: 700,
        right: 0,
        borderRight: 'none',
      },
      dots: {
        topOffset: 450,
        left: -150,
        columns: 5,
      },
    },
    {
      id: 'projects',
      ref: projectRef,
      box: {
        width: 112,
        height: 180,
        topOffset: 420,
        right: 0,
        borderRight: 'none',
      },
      dots: {
        topOffset: 230,
        left: -70,
        columns: 5,
      },
    },
    {
      id: 'skills',
      ref: skillsRef,
      box: {
        width: 112,
        height: 180,
        topOffset: 420,
        right: 0,
        borderRight: 'none',
      },
      dots: {
        topOffset: 200,
        left: 80,
        columns: 3,
      },
    },
    {
      id: 'about-me',
      ref: aboutMeRef,
      box: {
        width: 112,
        height: 200,
        topOffset: 250,
        left: 0,
        borderLeft: 'none',
      },
      dots: {
        topOffset: 250,
        right: -35,
        columns: 5,
      },
    },
    {
      id: 'contacts',
      ref: contactsRef,
      box: {
        width: 112,
        height: 200,
        topOffset: 250,
        left: 0,
        borderLeft: 'none',
      },
      dots: {
        topOffset: 100,
        left: 60,
        columns: 5,
      },
    },
  ];

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const handleScroll = () => {
      const scrollTop = scrollContainerRef.current.scrollTop;

      for (const section of sections) {
        if (!section.ref.current) continue;

        const top = section.ref.current.offsetTop;
        const height = section.ref.current.offsetHeight;

        if (scrollTop >= top - height / 2 && scrollTop < top + height / 2) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  const current = sections.find((s) => s.id === activeSection);
  if (!current || !current.ref.current) return null;

  const baseTop = current.ref.current.offsetTop;

  return (
    <>
      {/* REUNANELIÖ */}
      <div
        className="absolute transition-all duration-500 ease-in-out border border-[#ABB2BF]"
        style={{
          top: baseTop + current.box.topOffset,
          width: current.box.width,
          height: current.box.height,
          left: current.box.left ?? 'auto',
          right: current.box.right ?? 'auto',
          borderLeft: current.box.borderLeft,
          borderRight: current.box.borderRight,
        }}
      />

      {/* DOT GRID */}
      <div
        className="absolute transition-all duration-500 ease-in-out"
        style={{
          top: baseTop + current.dots.topOffset,
          left: current.dots.left ?? 'auto',
          right: current.dots.right ?? 'auto',
        }}
      >
        <DotGrid columns={current.dots.columns} />
      </div>
    </>
  );
};

export default ScrollElement;
