import Link from "next/link";

const menuItems = [
  {
    id: '1',
    name: 'About',
    link: '/about',
    pathD: 'M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z'
  },
  {
    id: '2',
    name: 'Experience',
    link: '/experience',
    pathD: 'M12 2h4a2 2 0 012 2v2h3a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h3V4a2 2 0 012-2zm4 4V4h-4v2h4zM5 10v10h14V10H5zm2 3h2v5H7v-5zm6 0h2v5h-2v-5z'
  },
  {
    id: '3',
    name: 'Projects',
    link: '/projects',
    pathD: 'M12 4H2v16h20V6H12l-2-2zm10 2v2H4V6h6.28L12 7.72 13.72 6H20z'
  },
  {
    id: '4',
    name: 'Skills',
    link: '/skills',
  },
  {
    id: '5',
    name: 'Education',
    link: '/education',
    pathD: 'M12 2L2 7v11a2 2 0 002 2h16a2 2 0 002-2V7l-10-5zm5 16H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V8h10v2z'
  },
  {
    id: '6',
    name: 'Resume',
    link: '/resume',
    pathD: 'M 19.355 10.036 C 18.674 6.595 15.641 4 12 4 C 9.108 4 6.603 5.639 5.352 8.036 C 2.343 8.36 0 10.906 0 14 C 0 17.314 2.686 20 6 20 L 19 20 C 21.761 20 24 17.761 24 15 C 24 12.36 21.948 10.221 19.355 10.036 z M 12 18 L 7 13 L 10 13 L 10 9 L 14 9 L 14 13 L 17 13 L 12 18 z'
  }, {
    id: '7',
    name: 'Contact',
    link: '/contact',
    pathD: 'M12,2c-4.97,0-9,4.03-9,9c0,2.5,1.03,4.73,2.68,6.32L7.5,19.5c-0.75-0.75-1.14-1.75-1.14-2.81 c0-2.21,1.79-4,4-4s4,1.79,4,4c0,1.06-0.39,2.06-1.14,2.81l2.82,2.82C19.97,15.73,21,13.5,21,11C21,6.03,16.97,2,12,2z M12,16 c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,16,12,16z'
  }
];

const Header = ({isMenuOpen, setIsMenuOpen}) => {

  return (
    <div className="h-full sm:w-1/3 md:w-1/4 lg:w-1/5 w-full shadow-md fixed left-0 top-0 overflow-y-auto bg-white">
        {/* Big screen */}
        <div className="hidden sm:block md:block">
            <div className='h-1/6 p-4'>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br">Sai Preethi Pantangi</div>
            <div className='text-sm'>Front End Engineer</div>
            </div>
            <hr className='shadow-md'/>
            <div>
              <Menu/>
            </div>
        </div>
        {/* Small screen */}
        <div className="sm:hidden md:hidden">
            <div>
              <div className='flex justify-between p-2'>
                  <div className='cursor-pointer' onClick={setIsMenuOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                  </div>
                  <div>
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br">Sai Preethi Pantangi</div>
                  <div className='text-sm'>Front End Engineer</div>
                  </div>
              </div>
              {/* On Hamburger click */}
              {
                isMenuOpen && 
                <div className={`absolute left-0 top-0 h-full bg-white w-1/2 shadow-2xl ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} transition ease-in-out duration-300 z-20`}>
                  <div className="m-2 cursor-pointer float-right" onClick={setIsMenuOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                      <defs>
                        <linearGradient id="grad1" gradientTransform="rotate(45)">
                            <stop offset="0%" stopColor="#774ba0" stopOpacity="1"/>
                            <stop offset="25%" stopColor="#685aad" stopOpacity="1"/>
                            <stop offset="50%" stopColor="#5767b6" stopOpacity="1"/>
                            <stop offset="75%" stopColor="#4572bc" stopOpacity="1"/>
                            <stop offset="100%" stopColor="#347dbf" stopOpacity="1"/>
                        </linearGradient>
                      </defs>
                      <path fill="#5265ae" d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                    </svg>
                  </div>
                  <div className="mt-6">
                    <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                  </div>
                </div>
              }
            </div>
        </div>
    </div>
  )
};

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <ul className="p-4">
      {
        menuItems.map((menuItem) => (
            <Link href={menuItem.link} key={menuItem.id} onClick={setIsMenuOpen}>
              <li className="mb-2 p-4 hover:bg-[#ebebeb] cursor-pointer border-l-4 border-transparent">
                <div className='flex gap-3'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <defs>
                          <linearGradient id="grad1" gradientTransform="rotate(45)">
                              <stop offset="0%" stopColor="#774ba0" stopOpacity="1"/>
                              <stop offset="25%" stopColor="#685aad" stopOpacity="1"/>
                              <stop offset="50%" stopColor="#5767b6" stopOpacity="1"/>
                              <stop offset="75%" stopColor="#4572bc" stopOpacity="1"/>
                              <stop offset="100%" stopColor="#347dbf" stopOpacity="1"/>
                          </linearGradient>
                        </defs>
                        {
                        menuItem.name === 'Skills' ? 
                        <>
                            <rect x="2" y="5" width="4" height="14" fill={isMenuOpen ? '#5265ae' : 'url(#grad1)'}/>
                            <rect x="8" y="11" width="4" height="8" fill={isMenuOpen ? '#5265ae' : 'url(#grad1)'}/>
                            <rect x="14" y="8" width="4" height="11" fill={isMenuOpen ? '#5265ae' : 'url(#grad1)'}/>
                            <rect x="20" y="14" width="4" height="5" fill={isMenuOpen ? '#5265ae' : 'url(#grad1)'}/>
                        </>:
                        <path d={menuItem.pathD} fill={isMenuOpen ? '#5265ae' : 'url(#grad1)'}/>
                        }
                    </svg>
                    </div>
                    <div>{menuItem.name}</div>
                </div>
              </li>
            </Link>
        ))
      }
  </ul>
  )
}

export default Header