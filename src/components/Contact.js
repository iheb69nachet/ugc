'use client';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary/20 to-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Parallax translateY={[-20, 20]}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-accent">Travaillons Ensemble</h2>
              <p className="text-accent/80">Prêt à créer du contenu incroyable pour votre marque ?</p>
            </div>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-accent/20 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-accent mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl bg-light-secondary border border-accent/20 text-accent 
                             focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl bg-light-secondary border border-accent/20 text-accent 
                             focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-accent mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-light-secondary border border-accent/20 text-accent 
                           focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-accent text-white px-8 py-4 rounded-xl font-medium 
                           shadow-lg hover:bg-accent/90 transition-all duration-300"
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