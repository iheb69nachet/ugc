'use client';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    slug: "beauty-lifestyle",
    title: "Beauty & Lifestyle",
    category: "Social Media UGC",
    description: "Authentic beauty product demonstrations and lifestyle content",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "fashion-stories",
    title: "Fashion Stories",
    category: "Content Creation",
    description: "Engaging fashion and style content for leading brands",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2340&auto=format&fit=crop",

  },
  {
    id: 3,
    slug: "wellness-journey",
    title: "Wellness Journey",
    category: "Lifestyle Content",
    description: "Authentic wellness and self-care content creation",
    image: "https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?q=80&w=2340&auto=format&fit=crop",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-light-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Parallax translateY={[-20, 20]} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-accent">Projets en Vedette</h2>
          <p className="text-accent/80">Transformer les marques par du contenu authentique</p>
        </Parallax>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <Parallax 
            key={project.id}
            translateY={[50, -50]}
            opacity={[0.8, 1]}
            scale={[0.95, 1]}
            easing="easeInQuad"
            className="relative"
          >
            <div className="relative h-[80vh] w-full group">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content Container */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-full flex items-center">
                  <div 
                    className={`backdrop-blur-md bg-white/90 p-8 rounded-3xl border border-accent/20 shadow-xl 
                      ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'} 
                      max-w-lg transform transition-all duration-500 hover:scale-105`}
                  >
                    <div className="space-y-4">
                      <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-accent text-sm">
                        {project.category}
                      </span>
                      <h3 className="text-4xl font-bold text-accent">{project.title}</h3>
                      <p className="text-lg text-accent/80">{project.description}</p>
                      <Link 
                        href={`/projet/${project.slug}`}
                        className="inline-block mt-6 px-8 py-4 bg-accent/20 hover:bg-accent/30 rounded-xl text-accent font-medium transition-all duration-300"
                      >
                        Voir le Projet
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <Parallax
                translateY={[-30, 30]}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="h-full flex items-center">
                    <div className={`w-32 h-32 rounded-full blur-3xl bg-blue-500/20 
                      ${index % 2 === 0 ? 'ml-0' : 'ml-auto'}`} 
                    />
                  </div>
                </div>
              </Parallax>
            </div>
          </Parallax>
        ))}
      </div>
    </section>
  );
} 