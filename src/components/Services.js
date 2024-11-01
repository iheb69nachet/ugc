'use client';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const services = [
  {
    title: "Stratégie de Contenu",
    description: "Élaboration de stratégies social media engageantes qui connectent avec votre audience",
    icon: "✨",
    gradient: "from-primary to-secondary"
  },
  {
    title: "Création UGC",
    description: "Création de contenu utilisateur authentique qui génère de l'engagement",
    icon: "📱",
    gradient: "from-secondary to-primary"
  },
  {
    title: "Storytelling de Marque",
    description: "Raconter l'histoire de votre marque à travers des narratifs visuels captivants",
    icon: "🎨",
    gradient: "from-primary/80 to-secondary/80"
  },
  {
    title: "Gestion des Réseaux Sociaux",
    description: "Gestion et développement de votre présence sur les réseaux sociaux",
    icon: "💫",
    gradient: "from-secondary/80 to-primary/80"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Parallax translateY={[-20, 20]}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4 text-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h2>
            <p className="text-accent/70">Élevez votre marque avec des solutions créatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-accent/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${service.gradient} shadow-lg`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-accent">{service.title}</h3>
                </div>
                <p className="text-accent/70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </Parallax>
      </div>
    </section>
  );
} 