"use client";
import StepComp from "@/components/StepComponents/stepComponent";
import { stepsProps } from "@/interfaces/stepsProps";
import api from "@/services/api";
import { jwtDecode } from "jwt-decode";
import Error from "next/error";
import { useState } from "react";

interface FormData {
  input1: string;
  select2: string;
  input2: string;
  [key: string]: string; // Índice de assinatura para permitir indexação por string
}

interface FormField {
  type: "file" | "input";
  label: string;
  name: string;
  inputType?: string;
}

export default function MixedForm() {
  const [formData, setFormData] = useState<FormData>({
    input1: "",
    select2: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const steps: stepsProps[] = [
    { id: 1, name: "Step 1", status: "complete", bg: "" },
    { id: 2, name: "Step 2", status: "complete", bg: "" },
    { id: 3, name: "Step 3", status: "upcoming", bg: "" },
  ];

  function handleComplete(event: any) {
    event.preventDefault();

    if (!selectedFile) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    console.log(formData);
    api.post("http://localhost:8080/api/v1/upload", formData).then(() => {
      var user: any = localStorage.getItem("user");
      user = JSON.parse(user);
      user = jwtDecode(user.Token);
      console.log(user.id);
      let uriPath = selectedFile.name;


      const objectDocuments = {
        id_user: user.id,
        documentos: uriPath,
      };

      console.log(objectDocuments);
      api.post("http://localhost:8080/api/v1/documents", objectDocuments);
      window.location.href = "/completeSendForm";

    }).catch((e: Error) => {
      return alert(e);
    });
  }

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
            flex
            flex-col
            m-2
            mb-2
            w-full
          "
        >
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">PDF COM TODOS OS DOCUMENTOS</label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              onChange={handleFileChange}
            />
          </div>
        </form>
        <div className="flex justify-center w-full">
          <button
            onClick={handleComplete}
            className="flex items-center shadow-lg justify-center p-4 bg-[#009D3F] rounded-md w-[177px] h-[39px]"
          >
            Enviar documentos
          </button>
        </div>
        <div className=" mt-10">
          <StepComp steps={steps} />
        </div>
      </div>
    </section>
  );
}
