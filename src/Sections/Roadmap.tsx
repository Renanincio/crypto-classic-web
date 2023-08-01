import Countdown from "../assets/countdown.png";
import { CgEditBlackPoint } from "react-icons/cg";
import Spain from '../assets/spain-flag.svg';
import SouthAfrica from '../assets/south-africa-flag.svg';
import Uk from '../assets/uk-flag.svg';
import Map from   '../assets/map.png'

export const Roadmap = () => {
  return (
    <>
      <section id="roadmap" className="max-w-[1170px] min-h-screen mx-auto pb-12 font-Dm flex flex-col items-center llg:px-6">
        <div className="text-center">
          <h1 className="text-blue-950 text-3xl">
            Por que você escolhe TheCoin
          </h1>
          <p className="text-neutral-500 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>

        <div className="w-full min-h-[640px] mt-32 bg-roadline bg-no-repeat bg-center bg-cover">
          <ul className="flex h-[640px] lg:flex-col lg:justify-center lg:gap-24 lg:mb-16">
            <li className="text-center flex flex-col items-center">
              <h1 className="text-blue-950 mt-4 text-[26px]">
                Junte-se a um novo servidor de hospedagem
              </h1>
              <p className="text-blue-950 leading-10 mt-4 sm:text-[14px]">
                Lorem ipsum dolor sit amet com consectetur adipisicing elit the
                help eiusmod tempor.
              </p>
              <CgEditBlackPoint className="text-[52px] text-neutral-400" />
              <p className="text-blue-950 leading-10 mt-4 sm:text-[14px]">
                29 de janeiro de 2019
              </p>
            </li>

            <li className="text-center flex flex-col items-center self-end lg:self-center">
              <h1 className="text-blue-950 mt-4 text-[26px]">
                Moeda de mineração com gpu mais recente
              </h1>
              <p className="text-blue-950 leading-10 mt-4 sm:text-[14px]">
                Lorem ipsum dolor sit amet com consectetur adipisicing elit the
                help eiusmod tempor.
              </p>
              <CgEditBlackPoint className="text-[52px] text-neutral-400" />
              <p className="text-blue-950 leading-10 mt-4 sm:text-[14px]">
                17 de abril de 2019
              </p>
            </li>

            <li className="text-center flex flex-col items-center">
              <h1 className="text-blue-950 mt-4 text-[26px]">
                Vire novo site com design
              </h1>
              <p className="text-blue-950 leading-10 mt-4 sm:text-[14px]">
                Lorem ipsum dolor sit amet com consectetur adipisicing elit the
                help eiusmod tempor.
              </p>
              <CgEditBlackPoint className="text-[52px] text-neutral-400" />
              <p className="text-blue-950 leading-10 mt-4 sm:text-[14px]">
                31 de outubro de 2019
              </p>
            </li>
          </ul>
        </div>
        <button className="bg-gray-200 text-gray-400 rounded px-6 py-3 hover:bg-black hover:text-white uppercase transition-all delay-100 mt-24">
          Veja o roteiro completo
        </button>

        <div className="flex justify-between mt-28 pb-28 lg:px-3 lg:flex-col lg:items-center">
    
        <div className="flex flex-col xl:max-w-[40%] lg:max-w-[70%] md:text-center">
          <h1 className="text-blue-950 leading-tight text-5xl sm:text-[24px]">
          Assuma o controle de seu crédito e identidade.
          </h1>
          <p className="text-blue-950 leading-10 mt-10 text-xl mb-8 sm:text-[14px]">
          É uma grande dor para se livrar da dor, mas ao mesmo tempo, há muita dor.
          </p>
          <h1 className="text-blue-950 text-5xl font-bold sm:text-[24px]">11 23 44 20</h1>
          <div className="flex gap-12 mt-12 text-[16px] font-bold lg:mb-24 md:justify-center">
            <button className="bg-black text-white rounded px-6 py-3 hover:opacity-[.8] uppercase transition-all delay-100 sm:text-[14px]">
              Comprar fichas
            </button>
          </div>
        </div>

        <img
          className="h-[440px] w-[640px]"
          src={Countdown}
          alt="Imagem ilustrativa de apresentação"
        />
      </div>

      <div className="text-center mt-16 max-w-[650px]">
            <h1 className="text-blue-950 text-3xl">
            Temos mais de 3 bilhões de usuários em todo o mundo
            </h1>
            <p className="text-neutral-500 mt-8">
            A dor em si pode ser seguida por uma redução na gordura, mas, ao mesmo tempo, a dor ocorre com dor
            </p>
          </div>

      <h1 className="text-blue-950 mt-12 text-[20px]">Jurisdições de jogos de azar licenciados</h1>

          <ul className="flex gap-6 mt-12 md:flex-col md:gap-12 md:my-16">
            <li className="flex gap-1">
              <img src={Uk} alt="Bandeira do Reino Unido" />
              <p className="text-blue-950 text-[20px]">Reino Unido</p>
            </li>

            <li className="flex gap-1">
              <img src={SouthAfrica} alt="Bandeira da África do Sul" />
              <p className="text-blue-950 text-[20px]">África do Sul</p>
            </li>

            <li className="flex gap-1">
              <img src={Spain} alt="Bandeira da espanha" />
              <p className="text-blue-950 text-[20px]">Espanha</p>
            </li>
          </ul>

          <img className="h-[640] w-full mt-24 xl:h-[340px] sm:h-[140px]" src={Map} alt="Imagem de um mapa" />
      </section>
    </>
  );
};
