import Banner from "../assets/banner-1.png";
import { AiFillPlayCircle } from "react-icons/ai";

export const Start = () => {
  return (
    <>
      <section id="start" className="min-h-screen w-[1170px] mx-auto flex justify-between mt-40 pb-28 font-Dm lg:px-3 lg:flex-col lg:items-center">
        <main className="flex flex-col xl:max-w-[40%] lg:max-w-[70%] md:text-center">
          <h1 className="text-blue-950 leading-tight text-5xl sm:text-[24px]">
            Bem-vindo ao próximo nível de Token de Criptomoedas com
            transferência mais rápida
          </h1>
          <p className="text-blue-950 leading-10 mt-10 text-xl sm:text-[14px]">
            Ajudamos marcas e agências a gerenciar programas de influenciadores
            de alto desempenho: descoberta e qualificação de talentos,
            gerenciamento de relacionamento, relatórios de campanha
            automatizados, medição de desempenho e benchmarking competitivo.
          </p>
          <div className="flex gap-12 mt-16 text-[16px] font-bold lg:mb-24 md:justify-center">
            <button className="bg-black text-white rounded px-6 py-3 hover:opacity-[.8] uppercase transition-all delay-100 sm:text-[14px]">
              Obter Token
            </button>
            <button className="text-black uppercase flex items-center gap-1 transition-all delay-100 sm:text-[14px]">
              Papel Branco
              <AiFillPlayCircle />
            </button>
          </div>
        </main>

        <img
          className="h-[440px] w-[640px] xl:h-[340px] xl:w-[540px] sm:h-[140px] sm:w-[280px]"
          src={Banner}
          alt="Imagem ilustrativa de apresentação"
        />
      </section>
    </>
  );
};
