import FooterComponent from "@/components/Footer/footer";
import HeaderComponent from "@/components/Header/header";
import StepComp from "@/components/StepComponents/stepComponent";
import { stepsProps } from "@/interfaces/stepsProps";

export default function StatusProtocol() {
  const steps: stepsProps[] = [
    {
      id: 1,
      name: "Envio de documentos",
      status: "complete",
      bg: "bg-yellow-300",
    },
    { id: 2, name: "Análise", status: "upcoming", bg: "" },
    { id: 3, name: "Emissão", status: "upcoming", bg: "" },
  ];

  return (
    <section className="bg-white min-h-screen flex flex-col justify-between">
      <HeaderComponent />
      <main className="flex justify-center items-center flex-grow">
        <div
          className="
          flex 
          flex-col
          justify-center
          items-center
          w-full
          px-8
          py-6
          shadow-lg
          max-w-2xl
          shadow-[#afb6bb]
          rounded
          bg-[#DAE2E8]
          text-center
          text-black
          min-h-[550px]  /* Define a altura mínima /
        "
        >
          <div className="my-6">
            <h2 className="text-xl font-bold my-6">
              Requerimento de visitação N° 123
            </h2>
            <p>
              Seu documento está em análise.
              <br />
              Veja as etapas que faltam:
            </p>
          </div>
          <StepComp steps={steps} />
        </div>
      </main>
      <FooterComponent />
    </section>
  );
}
