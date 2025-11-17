import React from 'react';
import logo from "../img/materialesLeonelLogoSinFondo.jpg"
export default function LeonelLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="animate-[scale-fade_1.5s_ease-out_infinite]">
        <img 
          src={logo}
          alt="Leonel Materiales"
          className="w-16"
        />
      </div>
      
      <style jsx>{`
        @keyframes scale-fade {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}