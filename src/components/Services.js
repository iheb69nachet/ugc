'use client';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const services = [
  {
    title: "Stratégie de Contenu",
    description: "Élaboration de stratégies social media engageantes qui connectent avec votre audience",
    icon: "✨",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "Création UGC",
    description: "Création de contenu utilisateur authentique qui génère de l'engagement",
    icon: "📱",
    gradient: "from-blue-500 to-teal-500"
  },
  {
    title: "Storytelling de Marque",
    description: "Raconter l'histoire de votre marque à travers des narratifs visuels captivants",
    icon: "🎨",
    gradient: "from-orange-500 to-pink-500"
  },
  {
    title: "Gestion des Réseaux Sociaux",
    description: "Gestion et développement de votre présence sur les réseaux sociaux",
    icon: "💫",
    gradient: "from-green-500 to-blue-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon/20 rounded-full"
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
              className="text-4xl font-bold mb-4 neon-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h2>
            <p className="text-gray-400">Élevez votre marque avec des solutions créatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 rounded-3xl border"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full p-2 ${service.gradient}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </Parallax>
      </div>
    </section>
  );
} 