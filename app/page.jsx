'use client'
import React from 'react';
import Counter from './components/Counter';

const HomePage = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center">
        <img src="/barou.jpg" alt="Descripción de la imagen" className="w-80 h-80 object-cover rounded-full mx-auto" />
        <p className="mt-4">Shouei Barou, delantero del proyecto Blue Look</p>
      </div>
    </main>
  );
};

export default HomePage;