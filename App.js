// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './screens/Navbar'; // Assurez-vous que le chemin est correct
import Home from './screens/Home'; // Assurez-vous que le chemin est correct
import Faq from './screens/Faq'; // Assurez-vous que le chemin est correct

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Barre de navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
