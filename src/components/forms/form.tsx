"use client";
import StepComp from "@/components/StepComponents/stepComponent";
import { stepsProps } from "@/interfaces/stepsProps";
import api from "@/services/api";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

interface FormData {
  select1: string;
  input1: string;
  select2: string;
  input2: string;
  [key: string]: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
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
  const [nameVisit, setNameVisit] = useState("");
  const [cpfRne, setcpfRne] = useState("");
  const [typeVisit, setTypeVisit] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelecdetCity] = useState("0");
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [numberHouse, setnumberHouse] = useState("");
  const [reqAssunto, setReqAssunto] = useState("");
  const [idUser, setidUser] = useState();

  const selectOptions = [
    { label: "Parentes", value: "Parentes" },
    { label: "Amigos", value: "Amigos" },
    { label: "Visita da igreja", value: "Visita da igreja" },
  ];

  const selectReqOptions = [
    { label: "Visita social", value: "Visita social" },
    { label: "Visita assistida", value: "Visita assistida" },
    { label: "Visita intima", value: "Visita intima" },
  ];

  const steps: stepsProps[] = [
    { id: 1, name: "Step 1", status: "complete", bg: "" },
    { id: 2, name: "Step 2", status: "upcoming", bg: "" },
    { id: 3, name: "Step 3", status: "upcoming", bg: "" },
  ];

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleTypeVisit(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setTypeVisit(e.target.value);
  }
  
  function handleNameVisit(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setNameVisit(e.target.value);
  }

  function handleCpfRne(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setcpfRne(e.target.value);
  }

  function handleCellphone(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setCellphone(e.target.value);
  }

  function handleDistrict(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setDistrict(e.target.value);
  }

  function handleStreet(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setStreet(e.target.value);
  }

  function handleNumber(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setnumberHouse(e.target.value);
  }

  function handleReqAssunto(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setReqAssunto(e.target.value);
  }
  

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelecdetCity(city);
  }

  function handleForm2() {
    const data = {
      nome_visitado: nameVisit,
      cpf_rne: cpfRne,
      tipo_visitacao: typeVisit,
      telefone: cellphone,
      estado: selectedUf,
      bairro: district,
      cidade: selectedCity,
      rua: street,
      numero_casa: numberHouse,
      requerimento_assunto: reqAssunto,
      id_user: {
        id: 1,
      },
    };

    api.post("/api/v1/req_camp", data);
    // window.location.href = "/sendform2";
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
            grid
            grid-flow-col
            grid-rows-5
            gap-7 
            w-full
            mb-4
          "
        >
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">
              Nome completo do visitado
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={nameVisit}
              onChange={handleNameVisit}
            />
          </div>
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">
              CPF ou RNE
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={cpfRne}
              onChange={handleCpfRne}
            />
          </div>
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">
              Tipo de visitação
            </label>
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
              value={typeVisit}
              onChange={handleTypeVisit}
            >
              <option value="">Selecione uma opção</option>
              {selectOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">
              Assunto do requerimento
            </label>
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
              value={reqAssunto}
              onChange={handleReqAssunto}
            >
              <option value="">Selecione uma opção</option>
              {selectReqOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">
              Telefone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={cellphone}
              onChange={handleCellphone}
            />
          </div>
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">
              Estado
            </label>
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
              value={selectedUf}
              onChange={handleSelectUf}
            >
              <option value="">Selecione uma opção</option>
              {ufs.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">
              Cidade
            </label>
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
              value={selectedCity}
              onChange={handleSelectCity}
            >
              <option value="">Selecione uma opção</option>
              {cities.map((ci) => (
                <option key={ci} value={ci}>
                  {ci}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">
              Bairro
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={district}
              onChange={handleDistrict}
            />
          </div>
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">
              Rua
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={street}
              onChange={handleStreet}
            />
          </div>
          <div className="mb-4 m flex-wrap max-w-2xl ">
            <label className="block text-gray-700 font-bold mb-2 ">
              Número da casa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={numberHouse}
              onChange={handleNumber}
            />
          </div>
        </form>
        <div className="flex justify-center w-full">
          {/* <button className="flex mx-2 items-center shadow-lg justify-center p-4 bg-[#1348D0] rounded-md w-[177px] h-[39px]">
            Salvar rascunho
          </button> */}

          <button
            onClick={handleForm2}
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
