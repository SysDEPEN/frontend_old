"use client";
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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [document, setDocument] = useState("");
  const [dateBorn, setDateBorn] = useState(new Date());

  async function handleRegister(e: FormEvent) {
    try {
      e.preventDefault();
      console.log("teste");

      const currentDate = new Date().toISOString();

      const user: UserProps = {
        name,
        email,
        password,
        document,
        gender,
        dateBorn,
        role: 0,
        created_at: currentDate,
        updated_at: currentDate,
      };

      if (confirmPassword === password) {
        const userCreated = await api.post("api/v1/users", {
          nome: user.name,
          documento: user.document,
          data_nasc: user.dateBorn,
          email: user.email,
          senha: user.password,
          sexo: user.gender,
          role: user.role,
          created_at: user.created_at,
          updated_at: user.updated_at,
        });
        alert("Cadastro realizado com sucesso!! " + userCreated.statusText);
        window.location.href = `/login`;
        return userCreated;
      } else {
        alert("As senhas não coincidem");
      }
    } catch (err: any) {
      setErrorMessage(err);
    }
  }

  return (
    <section className="">
      <HeaderComponent />
      <section className="w-full flex lg:h-[55vw] justify-center items-center bg-white">
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
            Cadastre sua conta
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
              onChange={(e) => setGender(e.currentTarget.value)}
            >
              <option disabled selected>
                Selecione seu gênero
              </option>

              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outros">Outros</option>
            </select>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="date"
              placeholder="Sua data de nascimento"
              onChange={(e) => setDateBorn(new Date(e.target.value))}
              id=""
              name=""
            />

            <div className="w-full">
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
              </div>
            </div>
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
              onChange={(e) => setConfirmPassword(e.target.value)}
              id=""
              name=""
            />
          </form>
          <button
            type="submit"
            onClick={handleRegister}
            className="flex items-center shadow-lg justify-center py-4 bg-[#1348D0] rounded-md w-[177px] h-[39px] m-4 "
          >
            Cadastrar
          </button>

          <label htmlFor="" className=" text-gray-700  py-1">
            Já possui uma conta?
            <a href="/login" className="text-blue-700">
              {" "}
              Acesse sua conta.
            </a>
          </label>
        </div>
      </section>
      <FooterComponent />
    </section>
  );
}
