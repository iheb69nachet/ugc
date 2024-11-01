'use client';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Parallax translateY={[-20, 20]}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 neon-text">Travaillons Ensemble</h2>
              <p className="text-gray-400">Prêt à créer du contenu incroyable pour votre marque ?</p>
            </div>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6 glass-card p-8 rounded-3xl border border-neon/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl bg-dark-card border border-neon/20 text-white 
                             focus:ring-2 focus:ring-neon focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl bg-dark-card border border-neon/20 text-white 
                             focus:ring-2 focus:ring-neon focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-dark-card border border-neon/20 text-white 
                           focus:ring-2 focus:ring-neon focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-neon text-dark px-8 py-4 rounded-xl font-medium shadow-lg shadow-neon/20 
                           hover:shadow-xl hover:shadow-neon/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Envoyer le Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </Parallax>
      </div>
    </section>
  );
} 