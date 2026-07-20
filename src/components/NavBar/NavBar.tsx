
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice';
import type { RootState } from '../../redux/store';
import { Link, NavLink } from 'react-router-dom';

interface NavLink { name: string; path: string; }
interface NavProps { title: string; 
  close:string;
 menu:string
  links: NavLink[]; }

const NavBar = ({ title, links,close,menu }: NavProps) => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const ThemeToggle = () => (
    <button onClick={() => dispatch(toggleTheme())} className="w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 flex items-center transition-all duration-300">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${mode === 'dark' ? 'translate-x-6 bg-gray-900' : 'translate-x-0 bg-white'}`}>
         {mode === 'light' ? '☀️' : '🌙'}
      </div>
    </button>
  );

  return (
    <nav className="relative flex justify-between items-center py-6 px-[112px] bg-white dark:bg-gray-900 transition-colors duration-300">
      <p className="text-xl font-semibold dark:text-white">{title}</p>
      
    
      <div className="hidden md:flex items-center gap-8">
       
<ul className="flex gap-6 font-normal dark:text-white">
  {links.map((link) => (
    <li key={link.name}>
      <NavLink
        to={link.path}
        className={({ isActive }) => 
          `pb-1 border-b-2 transition-all ${
            isActive 
              ? "border-white dark:border-white" 
              : "border-transparent" 
          }`
        }
      >
        {link.name}
      </NavLink>
    </li>
  ))}
</ul>
        <ThemeToggle/>
      </div>

  
      <button className="md:hidden text-2xl dark:text-white z-50" onClick={() => setIsMenuOpen(true)}>
        <img src={menu} alt="menu" className="dark:invert transition-all duration-300" />
</button>

     
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center gap-8 z-50">
         
         
          
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-2xl font-medium dark:text-white hover:text-gray-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        
          <ThemeToggle />
             <button className="absolute bottom-0 left-1/2 -text-3xl dark:text-white" onClick={() => setIsMenuOpen(false)}>
            <img src={close} alt="image-close"  className='dark:invert'/>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

