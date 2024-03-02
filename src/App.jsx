import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('./assets/background-found.jpg')] bg-cover bg-center blur-sm"></div>
        <div className="relative flex justify-center items-center h-screen">
          {/* Usamos transform-gpu para aprovechar la aceleración por hardware y obtener una animación más fluida */}
          <div className={`absolute transition duration-500 ease-in-out transform ${isLogin ? 'rotate-0' : 'rotate-[360deg]'}`}
               style={{ backfaceVisibility: 'hidden' }}> {/* Aseguramos que la parte trasera no sea visible durante el giro */}
            {isLogin ? (
              <Login setIsLogin={setIsLogin} />
            ) : (
              <Register setIsLogin={setIsLogin} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
