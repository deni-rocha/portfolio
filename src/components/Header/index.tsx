import Image from "next/image";
import imgPerfil from "@/../public/assets/perfil.jpg";

/* eslint-disable react/no-unescaped-entities */
const Header = () => {
  return (
    <div className="my-0 mx-auto h-96 flex justify-around py-16 px-0 flex-wrap md:flex-nowrap lg:flex-nowrap gap-8">
      {/* container de boas vindas */}
      <section
        className="relative h-[110px] flex flex-col items-center w-full text-primary hover:brightness-125 font-bold transition-all 
    md:block md:h-[300px] md:w-[250px] lg:w-[420px]"
      >
        <h1 className="m-0 text-3xl md:text-5xl absolute animate-leftIn">
          Olá, tudo bem?
        </h1>
        <span className="text-xl absolute mt-8 text-secondary font-thin py-1 px-0 animate-pulse md:text-2xl md:mt-28 lg:mt-14">
          Que tal ver um pouco do meu trabalho...{" "}
        </span>
      </section>

      {/* container de infos */}
      <section className="flex flex-col gap-8 justify-end items-center font-jetBrains md:w-[320px] md:h-[400px]">
        <div className="relative z-0 w-[200px] h-[200px] transition-all">
          {/* foto de perfil*/}
          <Image
            alt="perfil"
            src={imgPerfil}
            className="rounded-full w-[200px] h-[200px] object-cover"
          />
        </div>
        <div className="z-10 animate-pulse">
          <section className="p-8 rounded-2xl bg-gradient-to-r from-[#11172B] to-[#313860] hover:brightness-125">
            <div className="flex gap-2">
              <span className="text-[rgb(195,140,221)]">Sobre mim</span>
              <div className="text-[#595ba7]"> {"\u007B"}</div>
            </div>
            <div className="text-sm">
              "nome": <span className="text-white">Denilson Rocha,</span>
            </div>
            <div className="text-sm">
              "função": <span className="text-white">Full Stack</span>
            </div>
            <div className="text-[#595ba7]">{"\u007D"}</div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Header;
