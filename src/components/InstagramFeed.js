'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        // Remplacez avec votre token d'accès Instagram et votre user ID
        const ACCESS_TOKEN = 'IGQWRQVUliU0FPVDlxQU9CMnpfOEV0NWg1XzR2U2VWZAFZABeHB1MG1nTXhmcnBRb1ZAIY0xSYUZAxR3dJZATQzOERwSmkyU0RfcEh0Mm5DQmdRRkQwLUh5ZAVNVcVJJY1VnTmpsZAUp5YWljcHJtY25nX0dfSjFDNG54Y1EZD';
        const INSTAGRAM_ID = 'ihebnachet';
        
        const response = await fetch(
          `https://graph.instagram.com/${INSTAGRAM_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${ACCESS_TOKEN}`
        );
        
        if (!response.ok) throw new Error('Failed to fetch');
        console.log(response);
        
        const data = await response.json();
        setPosts(data.data.slice(0, 6)); // Limite à 6 posts
      } catch (err) {
        console.log(err.message);
        
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) return <div className="text-center text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Instagram Feed
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
            >
              <Image
                src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                alt={post.caption?.slice(0, 100) || 'Instagram post'}
                fill
                className="object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 