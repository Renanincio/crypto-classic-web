export const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="bg-black min-h-[60vh] flex flex-col justify-center w-full mx-auto text-center pb-28"
      >
        <h1 className="text-white text-5xl mt-16 font-bold sm:text-[24px]">
          Quer falar com nossa equipe de suporte?
        </h1>
        <p className="text-white my-16 text-[20px] sm:text-[14px]">
          Descubra como a equipe pode ajudá-lo a potencializar seu
          <br /> programa de marketing de fotos de influenciadores.
        </p>

        <div>
          <button className="rounded bg-white text-black font-bold py-3 px-6 sm:text-[14px]">
            Faça sua pergunta
          </button>
        </div>
      </section>
    </>
  );
};
