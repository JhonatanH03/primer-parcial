import React from 'react';

interface MoleculeNavBarProps {
    text: string;
  }

const MoleculeNavBar = () => {
    return (
      <nav className="bg-black p-1">
        <ul className="flex justify-center space-x-11 text-white">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Acerca de</a></li>
        </ul>
      </nav>
    );
  };

  export default MoleculeNavBar;