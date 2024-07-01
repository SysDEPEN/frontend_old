'use client'
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export default function HeaderComponent() {
  const [userLogged, setUserLogged] = useState(false);
  const [userCurrent, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      var user: any = localStorage.getItem("user");
      user = JSON.parse(user);
      user = jwtDecode(user.Token);
      console.log(user);
      setUser(user.sub);
      setUserLogged(true);
    }
  });
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
          <a className="py-4 px-4 uppercase">Sobre</a>
        </div>
        <div className="flex px-2 items-center justify-end">
          {userLogged ? (
            <h3 className="flex items-center shadow-lg justify-center p-4 bg-[#1348D0] rounded-md w-[177px] h-[39px]">
              {userCurrent}
            </h3>
          ) : (
            <button className="flex items-center shadow-lg justify-center p-4 bg-[#1348D0] rounded-md w-[177px] h-[39px]">
              <a href="/login" className="uppercase mr-10">
                Entrar
              </a>
              <ArrowRightCircleIcon className="h-8 w-8" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
