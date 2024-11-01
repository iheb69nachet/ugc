'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-dark-card rounded-full border border-neon/20">
              <p className="text-neon font-medium">Créatrice de Contenu UGC & Stratégiste</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transformer les Marques par le{' '}
              <span className="neon-text">Contenu Digital</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Création d'expériences digitales immersives qui connectent les marques avec leur audience et génèrent des résultats concrets.
            </p>
            <div className="flex gap-6 pt-4">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neon text-dark px-8 py-4 rounded-xl font-medium shadow-lg shadow-neon/20 hover:shadow-xl hover:shadow-neon/30 transition-all"
              >
                Démarrer un Projet
              </motion.a>
              <a href="#portfolio" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors font-medium">
                Voir le Portfolio
              </a>
            </div>
          </motion.div>
          <div className="relative h-[600px] group">
            <Image
              src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2340&auto=format&fit=crop"
              alt="UGC Creator"
              fill
              className="object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 