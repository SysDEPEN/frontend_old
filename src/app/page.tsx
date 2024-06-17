import FooterComponent from "@/components/Footer/footer";
import HeaderComponent from "@/components/Header/header";
import Image from "next/image";

import HomeExample from "../assets/frames/home-example.png";

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        <HeaderComponent />
        <div className="bg-white">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
            <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
              <div className="px-6 lg:px-0 lg:pt-4">
                <div className="mx-auto max-w-2xl">
                  <div className="max-w-lg">
                    <div className="md:mt-24 mt-32 lg:mt-16"></div>
                    <h1 className="mt-10 lg:text-4xl lg:max-w-sm font-bold tracking-tight text-gray-900 text-6xl">
                      O melhor caminho para carteira de visitantes
                    </h1>
                    <p className="mt-6 text-lg lg:max-w-md leading-8 text-gray-600">
                      Bem-vindo ao nosso serviço dedicado a simplificar o
                      processo de obtenção de carteirinhas para visitantes de
                      entes em instituições correcionais. Cadastre-se agora e
                      facilite suas visitas com apenas alguns cliques.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="/login"
                        className="
                          rounded-md 
                          w-[180px]
                          flex
                          justify-center
                          items-center 
                          bg-[#0135BA] 
                          py-2.5 
                          text-sm 
                          font-semibold 
                          text-white 
                          shadow-lg
                          hover:bg-[#2b4a99] 
                          focus-visible:outline 
                          focus-visible:outline-2 
                          focus-visible:outline-offset-2 
                          focus-visible:outline-indigo-600
                        ">
                        Começar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                <div
                  className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                  aria-hidden="true"
                />
                <div className="md:rounded-3xl">
                  <Image
                    src={HomeExample}
                    alt="home page frame"
                    width={1008}
                    height={591}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>
        </div>
        <FooterComponent />
      </div>
    </main>
  );
}
