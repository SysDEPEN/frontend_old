import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

import FooterComponent from "@/components/Footer/footer";
import HeaderComponent from "@/components/Header/header";
import TableProtocol from "@/components/TableProtocols/tableProtocols";

export default function ListProtocols() {
  return (
    <section
      className="
        w-full 
        flex-col 
        justify-center 
        items-center 
      bg-white"
    >
      <HeaderComponent />
      <main
        className="
        h-[45vw]
        flex
        justify-center
        items-center
        w-full"
      >
        <div className="">
          <div
            className="
              flex
              shadow-md
              shadow-slate-600
              my-12
              rounded-md"
          >
            <input
              placeholder="Buscar requerimento. Nome, Protocolo e Data"
              className=" 
              placeholder:text-black 
                placeholder:text-lg
                placeholder:font-semibold 
                placeholder:p-4 
                bg-[#DAE2E8] 
                text-black 
                rounded-l-md 
                w-[788px]
                px-4
                text-lg
                font-semibold"
              type="text"
            />
            <button
              className="
              bg-blue-600
                w-10
                h-10
                rounded-r-md
                flex
                justify-center
                items-center"
            >
              <MagnifyingGlassCircleIcon className="h-8 w-8 " />
            </button>
          </div>
          <div className="flex-col w-full ">
            <h3
              className="
                text-xl
                text-black
                font-bold"
            >
              Documentos para aprovar
            </h3>
            <TableProtocol />
          </div>
        </div>
      </main>
      <FooterComponent />
    </section>
  );
}
