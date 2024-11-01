'use client';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Directrice Marketing",
    company: "Beauty Co.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    quote: "Travailler avec CreateFlow a transformé notre présence sur les réseaux sociaux. Le contenu est authentique et engageant !"
  },
  {
    name: "Emily Chen",
    role: "Manager de Marque",
    company: "Style Hub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop",
    quote: "Le contenu UGC créé a dépassé nos attentes. Nos taux d'engagement n'ont jamais été aussi élevés !"
  },
  {
    name: "Lisa Thompson",
    role: "PDG",
    company: "Wellness Brand",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    quote: "CreateFlow comprend parfaitement la voix de notre marque. Ils nous ont aidés à créer une connexion authentique avec notre audience."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon/20 rounded-full blur-[120px]" />
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
              Témoignages Clients
            </motion.h2>
            <p className="text-accent/70">Ce que nos clients disent de notre collaboration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-accent/10 shadow-lg relative group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-accent/80 mb-6 mt-6 italic">"{testimonial.quote}"</p>
                <div className="text-center">
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-neon">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Parallax>
      </div>
    </section>
  );
} 