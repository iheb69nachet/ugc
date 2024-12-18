import { motion } from 'framer-motion';

export default function Portfolio() {
  const portfolioItems = [
    { src: "https://picsum.photos/200/300?grayscale", alt: "Portfolio Item 1" },
    { src: "https://picsum.photos/200/300?grayscale", alt: "Portfolio Item 2" },
    { src: "https://picsum.photos/200/300?grayscale", alt: "Portfolio Item 3" },
    { src: "https://picsum.photos/200/300?grayscale", alt: "Portfolio Item 4" },
    { src: "https://picsum.photos/200/300?grayscale", alt: "Portfolio Item 5" },
    { src: "https://picsum.photos/200/300?grayscale", alt: "Portfolio Item 6" },

  ];

  return (
    <section id="portfolio" className='bg-white' >
     <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4 text-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Portfolio
            </motion.h2>
            <p className="text-accent/70">
                Voir mes derniéres créations
            </p>
          </div>
      <div className="portfolio-items" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {portfolioItems.map((item, index) => (
          <a  href={"/projet/sfdsf"}className="portfolio-item" key={index}>
            <img src={item.src} alt={item.alt} style={{ width: '100%', borderRadius: '8px' }} />
          </a>
        ))}
      </div>
    </section>
  );
} 