"use client";
import StepComp from "@/components/StepComponents/stepComponent";
import { stepsProps } from "@/interfaces/stepsProps";
import { useState } from "react";

interface FormData {
  select1: string;
  input1: string;
  select2: string;
  input2: string;
  [key: string]: string; // Índice de assinatura para permitir indexação por string
}

interface FormField {
  type: "select" | "input";
  label: string;
  name: string;
  inputType?: string;
}

export default function MixedForm() {
  const [formData, setFormData] = useState<FormData>({
    select1: "",
    input1: "",
    select2: "",
    input2: "",
    select3: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    select4: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectOptions = [
    { label: "Opção 1", value: "option1" },
    { label: "Opção 2", value: "option2" },
    { label: "Opção 3", value: "option3" },
  ];

  const formFields: FormField[] = [
    {
      type: "input",
      label: "Nome completo do visitado",
      name: "input1",
      inputType: "text",
    },
    {
      type: "input",
      label: "RG/RNE do visitado",
      name: "input2",
      inputType: "text",
    },
    { type: "select", label: "Tipo de visitação", name: "select1" },
    { type: "input", label: "Telefone", name: "input3", inputType: "text" },
    { type: "select", label: "Estado", name: "select2" },
    { type: "select", label: "Cidade", name: "select3" },
    { type: "input", label: "Bairro", name: "input4", inputType: "text" },
    { type: "input", label: "Rua", name: "input5", inputType: "text" },
    { type: "input", label: "Número", name: "input6", inputType: "text" },
    { type: "select", label: "Assunto", name: "select4" },
  ];

   const steps: stepsProps[] = [
     { id: 1, name: "Step 1", status: "complete", bg: "" },
     { id: 2, name: "Step 2", status: "upcoming", bg: ""},
     { id: 3, name: "Step 3", status: "upcoming", bg: ""},
   ];
  return (
    <section className=" my-20 w-full flex h-[45vw] justify-center items-center ">
      <div
        className="
        flex justify-center
        items-center flex-col w-full px-8
        pt-6
        pb-8   
        shadow-lg
        max-w-2xl
      shadow-[#afb6bb]
        rounded
        bg-[#DAE2E8]"
      >
        <form
          className="
          grid
          grid-flow-col
          grid-rows-5
          gap-8 
          
          m-2
          mb-2
          w-full
          "
        >
          {formFields.map((field, index) => (
            <div key={index} className="mb-4 m flex-wrap max-w-2xl ">
              <label
                className="block text-gray-700 font-bold mb-2 "
                htmlFor={field.name}
              >
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  className="
                  shadow 
                  appearance-none 
                  border 
                  rounded 
                  w-full 
                  py-2 
                  px-3 
                  text-gray-700 
                  leading-tight 
                  focus:outline-none 
                  focus:shadow-outline"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                >
                  <option value="">Selecione uma opção</option>
                  {selectOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={field.name}
                  name={field.name}
                  type={field.inputType}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
        </form>
        <div className="flex justify-around w-full">
          <button className="flex mx-2 items-center shadow-lg justify-center p-4 bg-[#1348D0] rounded-md w-[177px] h-[39px]">
            Salvar rascunho
          </button>

          <button className="flex items-center shadow-lg justify-center p-4 bg-[#009D3F] rounded-md w-[177px] h-[39px]">
            Enviar documentos
          </button>
        </div>
        <div className=" mt-10">

          <StepComp steps={steps}/>
   
        </div>
      </div>
    </section>
  );
}
