'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetails({ project }) {
  return (
    <section className="py-20 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bouton Retour */}
        <Link 
          href="/#portfolio" 
          className="inline-flex items-center text-neon mb-8 hover:opacity-80 transition-opacity"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour au Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* En-tête du Projet */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400">{project.category}</p>
          </div>

          {/* Image Principale */}
          <div className="relative h-[60vh] mb-12 rounded-2xl overflow-hidden">
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Détails du Projet */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">À Propos du Projet</h2>
                <p className="text-gray-400">{project.description}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Objectifs</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {project.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl h-fit">
              <h3 className="text-xl font-bold text-white mb-4">Informations</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Client</p>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-gray-400">Services</p>
                  <p className="text-white font-medium">{project.services.join(', ')}</p>
                </div>
                <div>
                  <p className="text-gray-400">Date</p>
                  <p className="text-white font-medium">{project.date}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-neon text-dark px-6 py-3 rounded-xl font-medium mt-4 hover:opacity-90 transition-opacity"
                  >
                    Voir le Projet
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Galerie d'Images */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Galerie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative h-[30vh] rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 