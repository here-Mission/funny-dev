import { NavLink } from "react-router";
import {FaLaptopCode,FaTimes,FaBars} from "react-icons/fa"
import { useState } from "react";

const Navbar = () => {
    const base='transition hover:text-blue-400';
    const active='text-blue-400 font-semibold';
    const [menuopen,setMenuopen] = useState(false);
    return ( 
        <nav className="bg-gray-800 border-b border-gray-700
        shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <NavLink to='/' className='flex items-center gap-2 text-lg font-bold text-blue-300'>
                <FaLaptopCode className="text-blue-400 text-xl"/>
                <span>The Funny Developer</span>
                </NavLink>
                {/*Desktop Nav*/}
                <div className="hidden md:flex items-center gap-6">
                    <div className="space-x-4 text-sm text-gray-300">
                        <NavLink className={({isActive})=>isActive? active : base } to='/'>Home</NavLink>
                        <NavLink className={({isActive})=>isActive? active : base } to='/projects'>Projects</NavLink>
                        <NavLink className={({isActive})=>isActive? active : base } to='/blog'>Blog</NavLink>
                        <NavLink className={({isActive})=>isActive? active : base } to='/about'>About</NavLink>
                        <NavLink className={({isActive})=>isActive? active : base } to='/contact'>Contact</NavLink>
                    </div>
                </div>
                <div className="md:hidden flex item-center gap-4">
                    <button onClick={()=>setMenuopen(!menuopen)} className="text-blue-400 text-xl cursor-pointer" title="Menu">
                        { menuopen? <FaTimes/>: <FaBars/>}
                    </button>
                </div>
                
            </div>
            {/*Mobile Nav*/}
            { menuopen &&(
                <div className="md:hidden gb-gray-800 border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
                    <NavLink className={({isActive})=>isActive? active : base }
                    onClick={()=>setMenuopen(false)} to='/'>Home</NavLink>
                        <NavLink className={({isActive})=>isActive? active : base }
                        onClick={()=>setMenuopen(false)} to='/projects'>Projects</NavLink>
                        <NavLink className={({isActive})=>isActive? active : base }
                        onClick={()=>setMenuopen(false)} to='/blog'>Blog</NavLink>
                        <NavLink className={({isActive})=>isActive? active : base } 
                        onClick={()=>setMenuopen(false)} to='/about'>About</NavLink>
                        <NavLink className={({isActive})=>isActive? active : base } 
                        onClick={()=>setMenuopen(false)} to='/contact'>Contact</NavLink>
                </div>
            )}
        </nav>
     );
}
 
export default Navbar;