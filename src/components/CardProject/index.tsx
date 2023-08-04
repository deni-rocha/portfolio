import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineRightCircle } from "react-icons/ai";
import Image, { StaticImageData } from "next/image";

interface ProjetoProps {
  title: string;
  type: string;
  slug: number;
  imgUrl: StaticImageData;
  linkWeb: string;
  linkCode: string;
}

export default function CardProject({
  title,
  type,
  imgUrl,
  linkWeb,
  linkCode,
}: ProjetoProps): JSX.Element {
  return (
    <li className="flex flex-col lg:flex-row lg:even:self-end">
      <section className="w-[320px] h-[220px] md:w-[520px] md:h-[320px] relative flex">
        <Image
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover absolute rounded-3xl"
        />
        <div className="w-full h-full bg-gradient-to-r from-[#11172B] to-[#313860] opacity-75 rounded-3xl hover:opacity-20" />
        <div className="absolute animate-leftIn top-2 left-2 ">
          <h1 className="text-primary font-semibold text-4xl text_shadow">
            {title}
          </h1>
          <h2 className="text-secondary text-3xl font-light text_shadow">
            - {type}
          </h2>
        </div>
      </section>
      <div className="self-end flex lg:flex-col">
        <button className="h-16 bg-none border-none lg:h-7" type="button">
          <a
            target="_blank"
            className="text-white text-2xl font-light lg:hover:translate-x-6 hover:text-primary flex pl-2 items-center lg:items-end  gap-1 transition-all lg:text-3xl"
            href={linkWeb}
            rel="noreferrer"
          >
            visitar <AiOutlineRightCircle />
          </a>
        </button>
        <button className="h-16 bg-none border-none" type="button">
          <a
            target="_blank"
            className="text-white text-2xl font-light lg:hover:translate-x-6 hover:text-primary flex pl-2 items-center lg:items-end gap-1 transition-all lg:text-3xl"
            href={linkCode}
            rel="noreferrer"
          >
            código fonte <IoCodeSlash />
          </a>
        </button>
      </div>
    </li>
  );
}
