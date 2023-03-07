import React from 'react';
const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-gray-100 pt-7 ">
      <ul className="flex justify-evenly">
        <li className="flex justify-evenly">logo</li>
        <li className="flex justify-between">Mwnu</li>
        <li className="flex justify-between border-solid bg-slate-900 text-white">
          <input type="text" className="w-40 h-8 border-none " />
          <button className="w-8 h-8">Q</button>
        </li>
        <li className="flex justify-between">cart</li>

      </ul>
    </nav>
  );
}

export default Navbar;
