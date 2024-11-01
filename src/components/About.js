'use client';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Parallax translateY={[-20, 20]}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/about-image.jpg" // Add your professional photo
                alt="Your Name"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-blue-600">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Hi! I'm [Your Name], a passionate UGC creator specializing in authentic, 
                  engaging content that helps brands connect with their audience.
                </p>
                <p className="text-gray-600">
                  With over 5 years of experience in content creation, I've worked with 
                  brands across various industries to create compelling stories that drive engagement and conversions.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-bold text-xl text-blue-600">100+</h4>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-bold text-xl text-blue-600">50+</h4>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
} 