import React from 'react';
import Hero from '../components/Hero';
import ScrollStory from '../components/ScrollStory';
import Quote from '../components/Quote';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ScrollStory />
      <Quote />
      {/* Target sections will be imported here */}



    </main>
  );
}
