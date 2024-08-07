'use client';

import Header from '@components/Header';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

const Home = ({children}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateIsMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState)
  };

  const router = useRouter();

  useEffect(() => {
    router.push('/about');
  }, [router]);

  let style = 'mt-16 block p-4 w-full' + (!isMenuOpen && ' z-10');

  return (
    <div className="flex md:flex-row flex-col h-screen">
      <Header isMenuOpen = {isMenuOpen} setIsMenuOpen={updateIsMenuOpen}/>
      <div className="h-full w-full sm:w-2/3 md:w-3/4 lg:w-4/5 bg-slate-50 ml-auto overflow-y-auto">
        <div className="hidden sm:block md:block">
          <div>
            {children}
            <Analytics/>
          </div>
        </div>
        {/* Small screen content */}
        <div className="sm:hidden md:hidden flex">
          <div className={style}>
            {children}
            <Analytics/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

