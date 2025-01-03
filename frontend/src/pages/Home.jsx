import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-full h-screen bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      
        <div className="absolute bottom-0 p-8 bg-white left-0 right-0 w-full">
          <h1 className="text-3xl font-bold mb-4">Get started with Uber</h1>
          <Link to="/login" className="bg-black text-white px-4 py-2 rounded-md w-full font-semibold block text-center">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
