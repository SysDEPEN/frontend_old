import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function HeaderComponent() {
  return (
    <section className="bg-[#0135BA]">
      <div className="flex">
        <h1 className="p-4 uppercase">Depen</h1>
        <div className="flex w-full justify-center">
          <a href="/" className="py-4 px-4 uppercase">
            Inicio
          </a>
          <a className="py-4 px-4 uppercase">Contato</a>
          <a href="/sendform" className="py-4 px-4 uppercase">
            Documentos
          </a>
          <a href="/listProtocols" className="py-4 px-4 uppercase">Sobre</a>
        </div>
        <div className="flex px-2 items-center justify-end">
          <button className="flex items-center shadow-lg justify-center p-4 bg-[#1348D0] rounded-md w-[177px] h-[39px]">
            <a href="/login" className="uppercase mr-10">Entrar</a>
            <ArrowRightCircleIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
