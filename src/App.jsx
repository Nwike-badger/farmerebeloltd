// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-commissioner">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800"> Website Content</h1>
        <p className="mt-4 text-center text-gray-600"></p>
      </main>
    </div>
  );
};

export default App;
