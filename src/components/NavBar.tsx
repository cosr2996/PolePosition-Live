export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#1C1C1C] px-12 py-3 ">
      <div className="flex">
        <img src="/nav-logo.png" alt="logo" className="h-20 hover:scale-105 duration-300 cursor-pointer" />
      </div>

      <ul className="flex space-x-6 font-bold text-white text ">
        <li className="px-4 py-2 border-b-2 border-transparent hover:border-[#FF1E00]  duration-300 cursor-pointer">
          {" "}
          <a href="#">Stadings</a>
        </li>
        <li className="px-4 py-2 border-b-2 border-transparent hover:border-[#FF1E00]   duration-300 cursor-pointer">
          {" "}
          <a href="#">Schedule</a>
        </li>
        <li className="px-4 py-2 border-b-2 border-transparent hover:border-[#FF1E00]   duration-300 cursor-pointer">
          {" "}
          <a href="#">Drivers</a>
        </li>
        <li className="px-4 py-2 border-b-2 border-transparent hover:border-[#FF1E00]   duration-300 cursor-pointerr">
          {" "}
          <a href="#">GitHub</a>
        </li>
        <li className="px-4 py-2 border-b-2 border-transparent hover:border-[#FF1E00]   duration-300 cursor-pointer">
          {" "}
          <a href="#">Coffee</a>
        </li>
      </ul>
    </nav>
  );
};
