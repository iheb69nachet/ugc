import ProjectDetails from '@/components/ProjectDetails';

// Données de démonstration avec images Unsplash
const projectData = {
  title: "Campagne UGC pour BeautyBrand",
  category: "Contenu UGC",
  mainImage: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2340&auto=format&fit=crop",
  description: "Une campagne de contenu généré par les utilisateurs pour augmenter l'engagement et l'authenticité de la marque sur les réseaux sociaux.",
  objectives: [
    "Augmenter l'engagement sur Instagram de 150%",
    "Créer une bibliothèque de contenu authentique",
    "Renforcer la confiance des consommateurs"
  ],
  client: "BeautyBrand",
  services: ["Création UGC", "Stratégie Social Media", "Production Vidéo"],
  date: "2024",
  link: "https://example.com",
  gallery: [
    "https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?q=80&w=2340&auto=format&fit=crop",
   
    "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?q=80&w=2340&auto=format&fit=crop",
   
    "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2340&auto=format&fit=crop", "https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?q=80&w=2340&auto=format&fit=crop",
   
    "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2340&auto=format&fit=crop", "https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?q=80&w=2340&auto=format&fit=crop",
   
    "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2340&auto=format&fit=crop",
  ]
};

export default function ProjectPage({ params }) {
  return <ProjectDetails project={projectData} />;
} 