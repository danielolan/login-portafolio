import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>      
      <div className="h-screen w-screen flex">
        <div className="bg-blue-500 w-1/2">
        <Login/>
        </div>
        <div className="bg-red-500 w-1/2">
        <Register/>
        </div>
        
      </div>
    </>
  );
}

export default App;
