'use client';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

export default function AboutContent() {
  return (
    <Parallax translateY={[-20, 20]}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] group">
          <Image
            src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=2340&auto=format&fit=crop"
            alt="UGC Creator at work"
            fill
            className="object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        
        </div>
        
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
            <p className="text-blue-600 font-medium">About Me</p>
          </div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">Crafting Authentic Stories Through UGC</h2>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm Sarah Parker, a dedicated UGC creator passionate about crafting authentic content 
              that bridges the gap between brands and their audiences.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Specializing in creating genuine, relatable content that resonates with viewers 
              and drives real engagement for brands across various industries.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-3xl text-blue-600">100+</h4>
                <p className="text-gray-600 font-medium">Successful Projects</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-3xl text-blue-600">50+</h4>
                <p className="text-gray-600 font-medium">Brand Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}