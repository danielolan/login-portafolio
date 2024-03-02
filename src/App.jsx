import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <>
      <div className="relative h-screen w-screen">
        {/* Div para la imagen de fondo con opacidad */}
        <div className="absolute inset-0 bg-[url('./assets/background-found.jpg')] bg-cover bg-center blur-sm"></div>
        
        {/* Overlay que permite contenido encima de la imagen de fondo */}
        <div className="relative">
          <Login />
        </div>
      </div>
    </>
  );
}

export default App;
