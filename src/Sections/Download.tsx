import OurWallet from "../assets/our-wallet.png";
import Wallet1 from "../assets/wallet-1.svg";
import Wallet2 from "../assets/wallet-2.svg";
import Wallet3 from "../assets/wallet-3.svg";
import WalletApple from "../assets/wallet-apple.png";
import WalletGoogle from "../assets/wallet-google.png";

export const Download = () => {
  return (
    <>
      <section
        id="download"
        className="min-h-screen max-w-[1170px] mx-auto flex justify-between mt-16 pb-28 font-Dm llg:px-6 lg:flex-col lg:items-center"
      >
        <img
          className="h-[640px] w-[600px] xl:h-[440px] xl:w-[540px] lg:mb-12 sm:h-[240px] sm:w-[280px]"
          src={OurWallet}
          alt="Imagem ilustrativa de apresentação"
        />
        <div className="flex flex-col w-[450px] xl:max-w-[40%] lg:max-w-[90%] md:text-center">
          <h1 className="text-blue-950 leading-tight text-5xl sm:text-[24px]">
            Nossa carteira é integrada para os clientes de criptomoedas
          </h1>
          <p className="text-blue-950 leading-10 mt-10 text-xl sm:text-[14px]">
            É uma grande dor para se livrar da dor, mas ao mesmo tempo, há muita
            dor.
          </p>

          <ul className="flex flex-col gap-6 mt-8">
            <li className="flex gap-3">
              <img src={Wallet1} alt="Imagem de um escudo" />
              <p className="text-blue-950 text-[18px] sm:text-[14px]">
                Transferências seguras com cassinos verificados.
              </p>
            </li>

            <li className="flex gap-3">
              <img src={Wallet2} alt="Imagem de um escudo" />
              <p className="text-blue-950 text-[18px] sm:text-[14px]">
                Compre e venda facilmente CLV dentro da carteira.
              </p>
            </li>

            <li className="flex gap-3">
              <img src={Wallet3} alt="Imagem de um escudo" />
              <p className="text-blue-950 text-[18px] sm:text-[14px]">
                Pague a gasolina em CLV.
              </p>
            </li>
          </ul>
          <div className="flex gap-6 mt-16 text-[16px] font-bold">
            <button className="bg-black text-white rounded px-6 py-3 hover:opacity-[.8]  transition-all delay-100 flex gap-1 items-center">
              <img src={WalletApple} alt="Logo da Apple" />

              <p className="sm:text-[14px]">Loja de aplicativos</p>
            </button>
            <button className="bg-black text-white rounded px-6 py-3 hover:opacity-[.8]  transition-all delay-100 flex gap-1 items-center">
              <img src={WalletGoogle} alt="Logo da Google" />

              <p className="sm:text-[14px]">Loja de jogos</p>
            </button>
          </div>

          <p className="text-neutral-400 mt-8 text-[16px] sm:text-[12px]">
            *Aplicativo do Windows em breve
          </p>
        </div>
      </section>
    </>
  );
};
