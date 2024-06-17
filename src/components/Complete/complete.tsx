import { stepsProps } from "@/interfaces/stepsProps";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import StepComp from "../StepComponents/stepComponent";

export default function CompleteComponent() {
  const steps: stepsProps[] = [
    { id: 1, name: "Step 1", status: "complete", bg: "" },
    { id: 2, name: "Step 2", status: "complete", bg: "" },
    { id: 3, name: "Step 3", status: "complete", bg: "" },
  ];

  return (
    <section
      className="
        h-[55vw]
        flex
        justify-center
        items-center"
    >
      <div
        className="
        flex 
        justify-center
        items-center flex-col w-full px-8
        pt-6
        pb-8   
        shadow-lg
        max-w-2xl
      shadow-[#afb6bb]
        rounded
        bg-[#DAE2E8]
        text-center
        text-black"
      >
        <CheckCircleIcon className="text-green-700 h-60 w-60" />

        <div className="py-2 flex flex-col my-4">
          <h3 className="mb-4 text-3xl font-bold">Documentos enviados</h3>
          <strong className="max-w-md text-lg mb-[60px] font-normal">
            Seus documentos foram enviados e estão sendo analisados. O tempo de
            análise é de 30 dias úteis
          </strong>
          <span className="font-bold text-lg mb-[60px] text-yellow-400">
            Leia os termos de visitação aqui
          </span>
        </div>
        <StepComp steps={steps} />
      </div>
    </section>
  );
}
