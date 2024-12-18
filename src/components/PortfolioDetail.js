import React from 'react';

export default function PortfolioDetail() {
  const project = {
    title: "Stunning Landscape Photography",
    image: "https://source.unsplash.com/random/800x600?sig=1",
    description: "This project showcases a collection of stunning landscape photographs captured during my travels. Each image tells a story and captures the beauty of nature.",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/example/landscape-photography" },
      { platform: "Live Demo", url: "https://example.com/landscape-photography" },
      { platform: "Instagram", url: "https://instagram.com/example" },
    ],
  };

  return (
    <section style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>{project.title}</h2>
      <div style={{ marginBottom: '20px' }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '8px' }} />
      </div>
      <p>{project.description}</p>
      <div style={{ marginTop: '20px' }}>
        <h3>Connect with us:</h3>
        <div>
          {project.socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 