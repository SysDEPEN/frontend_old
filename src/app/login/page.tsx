"use client";

import FooterComponent from "@/components/Footer/footer";
import HeaderComponent from "@/components/Header/header";
import api from "@/services/api";
import { FormEvent, useState } from "react";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleRegister(e: FormEvent) {
    try {
      const data: any = {
        email,
        password
      }
      const user = await api.get(`user/authent`, data);
      //salvar o usuario no localstorage para usar futuramente nas paginas
      localStorage.setItem("user", JSON.stringify(user));
      if (localStorage.getItem("user")) {
        
      }
      window.location.href = "/";
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
          h-1/2
          w-full
          max-w-96"
        >
          <label className="block text-gray-700 font-bold m-2 py-1 ">
            Acessar sua conta
          </label>
          <form action="" className="flex-col justify-center items-center w-full" onSubmit={handleRegister}>
            <input
              className="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4 "
              type="email"
              placeholder="EMAIL"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id=""
              name=""
            />

            <input
              className="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              type="password"
              placeholder="Senha"
              id=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name=""
            />
          </form>

          <label htmlFor="" className=" text-gray-700 m-2 py-1 ">
            Esqueceu sua senha?
            <a href="" className="text-blue-700">
              {" "}
              Redefinir senha
            </a>
          </label>

          <button
            onClick={handleRegister}
            className="flex items-center shadow-lg justify-center py-4 bg-[#1348D0] rounded-md w-[177px] h-[39px] m-1"
          >
            Entrar
          </button>

          <label htmlFor="" className=" text-gray-700  py-1">
            Não possui uma conta?
            <a href="/createAccount" className="text-blue-700">
              {" "}
              Crie sua conta.
            </a>
          </label>
        </div>
      </section>

      <FooterComponent />
    </section>
  );
}
