import FooterComponent from "@/components/Footer/footer";
import HeaderComponent from "@/components/Header/header";
import { UserProps } from "@/interfaces/userProps";
import api from "@/services/api";
import { FormEvent, useState } from "react";

export default function SendDocument() {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setGender] = useState("");
  const [document, setDocument] = useState("");
  const [dateBorn, setDateBorn] = useState("");

  async function handleRegister(e: FormEvent) {
    e.preventDefault();

    const data: UserProps = {
      name,
      email,
      password,
      document,
      gender,
      dateBorn,
      role: 0,
    };

    try {
      await api.post("user", data);
      alert("Cadastro realizado com sucesso!!");
      // navigate(`/login`);
    } catch (err: any) {
      setErrorMessage(err);
    }
  }

  return (
    <section className="">
      <HeaderComponent />
      <section className="w-full flex h-[45vw] justify-center items-center bg-white">
        <div
          className="
          flex
          bg-[#DAE2E8]
          shadow-lg
          justify-center
          items-center
          flex-col
          shadow-[#afb6bb]
          rounded
          px-8
          pt-2
          pb-8
          m-2
          mb-2
          h-xl
          w-full
          max-w-96"
        >
          <label className="block text-gray-700 font-bold m-2 py-1 ">
            Cadastras sua conta
          </label>

          <form
            action=""
            onSubmit={handleRegister}
            className="
          flex 
          justify-center 
          items-center
          flex-col"
          >
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="text"
              placeholder="Nome Completo"
              onChange={(e) => setName(e.target.value)}
              id=""
              name=""
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="text"
              placeholder="CPF/RNE"
              onChange={(e) => setDocument(e.target.value)}
              id=""
              name=""
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="email"
              placeholder="Seu email"
              onChange={(e) => setEmail(e.target.value)}
              id=""
              name=""
            />

            <select
              name=""
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
            >
              <option value="DEFAULT" disabled selected>
                Selecione seu gênero
              </option>

              <option
                onChange={(e) => setGender(e.currentTarget.value)}
                value="masculino"
              >
                Masculino
              </option>
              <option
                onChange={(e) => setGender(e.currentTarget.value)}
                value="feminino"
              >
                Feminino
              </option>
              <option
                onChange={(e) => setGender(e.currentTarget.value)}
                value="outros"
              >
                Outros
              </option>
            </select>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="password"
              placeholder="Senha"
              onChange={(e) => setpassword(e.target.value)}
              id=""
              name=""
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="password"
              placeholder="Repetir senha"
              onChange={(e) => setpassword(e.target.value)}
              id=""
              name=""
            />

            <button onClick={handleRegister} className="flex items-center shadow-lg justify-center py-4 bg-[#1348D0] rounded-md w-[177px] h-[39px] m-4 ">
              Cadastrar
            </button>

            <label htmlFor="" className=" text-gray-700  py-1">
              Já possui uma conta?
              <a href="/login" className="text-blue-700">
                {" "}
                Acesse sua conta.
              </a>
            </label>
          </form>
        </div>
      </section>
      <FooterComponent />
    </section>
  );
}
