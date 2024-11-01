'use client';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Brand Campaign",
    category: "Social Media",
    image: "/images/portfolio-1.jpg",
    link: "#"
  },
  // Add more projects...
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
          <p className="text-gray-600">Check out some of my recent work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Parallax 
              key={project.id} 
              translateY={[20, -20]} 
              speed={5}
              startScroll={0}
              endScroll={1000}
            >
              <div className="group relative overflow-hidden rounded-2xl">
                <div className="relative h-[400px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
} 