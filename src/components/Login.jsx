


const Login = ({ setIsLogin }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent">
      <div className="bg-white p-8 rounded shadow-md ">
      <h1 className="block text-xl font-medium text-gray-700 text-center italic">LOGIN</h1>
        <form className="space-y-4 p-10">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Log in
          </button>
        </form>
      
        <a href="#" className=" text-cyan-500 block text-l font-medium text-center " onClick={() => setIsLogin(false)}>¿Quieres registrarte?</a>
        </div>
    </div>
  );
};

export default Login;
