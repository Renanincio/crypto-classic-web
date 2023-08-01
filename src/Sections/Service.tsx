import Why1 from "../assets/why-choose-1.svg";
import Why2 from "../assets/why-choose-2.svg";
import Why3 from "../assets/why-choose-3.svg";
import Why4 from "../assets/why-choose-4.svg";
import Graph from "../assets/graph.png";

export const Service = () => {
  return (
    <>
      <section id="service" className="max-w-[1170px] min-h-screen mx-auto pb-12 font-Dm llg:px-6">
        <div className="flex justify-center flex-col">
          <div className="text-center">
            <h1 className="text-blue-950 text-3xl sm:text-[24px]">
              Por que você escolhe TheCoin
            </h1>
            <p className="text-neutral-500 mt-8 sm:text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>

          <ul className="flex lg:flex-wrap lg:justify-center w-full mt-16">
            <li className="text-center flex flex-col items-center">
              <img src={Why1} />
              <h1 className="text-blue-950 mt-4 text-[26px] sm:text-[24px]">
                Ótimo valor de mercado
              </h1>
              <p className="text-blue-950 leading-10 mt-4">
                Lorem ipsum dolor sit amet com consectetur adipisicing elit the
                help eiusmod tempor.
              </p>
            </li>

            <li className="text-center flex flex-col items-center">
              <img src={Why2} />
              <h1 className="text-blue-950 mt-4 text-[26px] sm:text-[24px]">
                Processo de Mineração Verificado
              </h1>
              <p className="text-blue-950 leading-10 mt-4">
                Lorem ipsum dolor sit amet com consectetur adipisicing elit the
                help eiusmod tempor.
              </p>
            </li>

            <li className="text-center flex flex-col items-center">
              <img src={Why3} />
              <h1 className="text-blue-950 mt-4 text-[26px] sm:text-[24px]">
                Minerador mais rápido
              </h1>
              <p className="text-blue-950 leading-10 mt-4">
                Lorem ipsum dolor sit amet com consectetur adipisicing elit the
                help eiusmod tempor.
              </p>
            </li>

            <li className="text-center flex flex-col items-center">
              <img src={Why4} />
              <h1 className="text-blue-950 mt-4 text-[26px] sm:text-[24px]">
                Transação segura
              </h1>
              <p className="text-blue-950 leading-10 mt-4">
                Lorem ipsum dolor sit amet com consectetur adipisicing elit the
                help eiusmod tempor.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex justify-between mt-28 pb-28 lg:px-3 lg:flex-col lg:items-center">
          <img
            className="h-[440px] w-[640px] xl:h-[340px] xl:w-[540px] sm:h-[140px] sm:w-[280px]"
            src={Graph}
            alt="Imagem ilustrativa de apresentação"
          />
          <div className="flex flex-col xl:max-w-[40%] lg:max-w-[70%] lg:mt-24 md:text-center">
            <h1 className="text-blue-950 leading-tight text-5xl sm:text-[24px]">
              Venda de investimento total da transação do ano passado
            </h1>
            <p className="text-blue-950 leading-10 mt-10 text-xl sm:text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed
              eiusmod tempor incididunt labore dolore magna aliqua minim Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <div className="flex gap-12 mt-16 text-[16px] font-bold lg:mb-24 md:justify-center">
              <button className="bg-gray-200 text-gray-400 rounded px-6 py-3 hover:bg-black hover:text-white uppercase transition-all delay-100 sm:text-[14px]">
                Saber mais
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
