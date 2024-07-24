import React from 'react';

const Page = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img 
        src="/PP.png" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-85" 
      />
      
      <div className="relative z-10 h-full flex items-center justify-center text-white text-2xl font-bold">
        <div className="text-center">
          <div>I'm a frontend developer focused on</div>
          <div>developing optimized and performant applications.</div>
        </div>
      </div>
    </div>
  );
}

export default Page;
