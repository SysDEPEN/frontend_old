import FooterComponent from "@/components/Footer/footer";
import HeaderComponent from "@/components/Header/header";
import MixedForm from "@/components/forms/form";

export default function sobre() {
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
          max-w-96">

          <label 
          className="block text-gray-700 font-bold m-2 py-1 " >
          Acessar sua conta
          </label>



          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
          type="email"
          placeholder="CPF/RNE"
          id=""
          name=""
          />

          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
          type="password"
          placeholder="Senha"
          id=""
          name=""
          />

          <label htmlFor="" className=" text-gray-700 m-2 py-1 " >Esqueceu sua senha?
          <a href="" className="text-blue-700"
          > Redefinir senha</a>
          </label>

          <button className="flex items-center shadow-lg justify-center py-4 bg-[#1348D0] rounded-md w-[177px] h-[39px] m-1" >
            Entrar
          </button>

          <label htmlFor=""
          className=" text-gray-700  py-1"
          >Não possui uma conta? 
          <a href="/creatAccount"className="text-blue-700"
          > Crie sua conta.
          </a>
          </label>
            
            

          </div>
        
        </section>

        <FooterComponent />
      </section>
    );
}