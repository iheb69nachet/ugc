'use client';
import AboutContent from './AboutContent';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Parallax translateY={[-20, 20]}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <h3 className="text-2xl font-semibold text-neon mb-2">Imen Charaabi</h3>
            <p className="text-xl text-gray-300 mb-6">UGC Content Creator</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                C'est Imen, créatrice de contenu spécialisée dans le contenu
                généré par les utilisateurs (UGC), basée en Tunisie. Avec
                une expérience en création de contenu sur diverses
                plateformes, je m'efforce de produire des images et des
                vidéos qui résonnent avec les audiences et renforcent les
                marques.
              </p>
              <p className="text-lg">
                Mon approche est centrée sur la créativité,
                l'innovation, et l'engagement authentique avec les
                communautés en ligne. Je suis toujours à la recherche de
                nouvelles façons d'exprimer ma vision artistique tout en
                contribuant au succès des projets auxquels je participe.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://imen-charaabi.my.canva.site/media/449bd2d1926647007a752a3f04e33938.jpg" // N'oubliez pas d'ajouter votre image
                alt="Imen Charaabi"
                fill
                className="object-contain rounded"
              />
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
} 