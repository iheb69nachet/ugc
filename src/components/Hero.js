import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Creating Engaging <span className="text-blue-600">UGC Content</span> For Your Brand
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Professional content creator helping brands connect with their audience through authentic and engaging content.
            </p>
            <div className="flex gap-4">
              <a href="#contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Work With Me
              </a>
              <a href="#portfolio" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Portfolio
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/images/hero-image.jpg" // Add your image to public/images/
              alt="UGC Creator"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 