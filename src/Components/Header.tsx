import Logo from "../assets/logo.svg";
import { Link } from 'react-scroll';
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";

export const Header = () => {
  const [showMenu, setshowMenu] = useState(false)
  return (
    <>
      <header className="h-24 w-full bg-white font-Dm fixed top-0 left-0">
        <div className=" mx-auto h-full max-w-[1170px] flex justify-between items-center llg:px-6">
        <a>
          <img src={Logo} alt="Logo da página" />
        </a>

        <ul className={showMenu ? "flex flex-col gap-8 text-xl md:fixed md:left-0 md:top-0 md:h-screen md:pt-12 md:px-8 md:bg-white " : "flex gap-8 text-xl md:-ml-[3000px] ml-96"}>
          <li className="list-none">
          <Link activeClass="font-bold" smooth spy to="start">
            <a className="text-blue-950 transition-all delay-100 cursor-pointer">
              Ínicio
            </a>
            </Link>
          </li>

          <li>
          <Link activeClass="font-bold" smooth spy to="service">
            <a onClick={() => setshowMenu(false)} className="text-blue-950 transition-all delay-100 cursor-pointer">
              Serviços
            </a>
            </Link>
          </li>

          <li>
          <Link activeClass="font-bold" smooth spy to="roadmap">
            <a onClick={() => setshowMenu(false)} className="text-blue-950 transition-all delay-100 cursor-pointer">
              Roteiro
            </a>
            </Link>
          </li>

          <li>
          <Link activeClass="font-bold" smooth spy to="download">
            <a onClick={() => setshowMenu(false)} className="text-blue-950 transition-all delay-100 cursor-pointer">
              Downloads
            </a>
            </Link>
          </li>

          <li>
          <Link activeClass="font-bold" smooth spy to="contact">
            <a onClick={() => setshowMenu(false)} className="text-blue-950 transition-all delay-100 cursor-pointer">
              Contato
            </a>
            </Link>
          </li>
        </ul>
        <button onClick={() => setshowMenu(!showMenu)}><CgMenuRound className='hidden md:flex text-blue-950 text-[20px]' /></button>
        </div>
        
      </header>
    </>
  );
};
