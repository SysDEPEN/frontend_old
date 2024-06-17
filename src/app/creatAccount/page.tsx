import FooterComponent from "@/components/Footer/footer";
import HeaderComponent from "@/components/Header/header";

export default function SendDocument() {
  return (
    <section className="">
      <HeaderComponent />
      <section className="w-full flex h-[45vw] justify-center items-center bg-white">
        <div className="
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
          max-w-96">


          <label
            className="block text-gray-700 font-bold m-2 py-1 " >
            Cadastras sua conta
          </label>


          <form action="" className="
          flex 
          justify-center 
          items-center
          flex-col">


            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="text"
              placeholder="Nome Completo"
              id=""
              name=""
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="email"
              placeholder="CPF/RNE"
              id=""
              name=""
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="email"
              placeholder="Seu email"
              id=""
              name=""
            />

            <select
              name=""
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
            >
              <option value="" disabled selected>Selecione seu gênero</option>
              <option value="">opc1</option>
              <option value="">opc2</option>
              <option value="">opc3</option>

            </select>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="password"
              placeholder="Senha"
              id=""
              name=""
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
              type="password"
              placeholder="Repitir senha"
              id=""
              name=""
            />

            <button className="flex items-center shadow-lg justify-center py-4 bg-[#1348D0] rounded-md w-[177px] h-[39px] m-4 " >
              Cadastrar
            </button>



            <label htmlFor=""
              className=" text-gray-700  py-1"
            >Já possui uma conta?
              <a href="/login" className="text-blue-700"
              > Acesse sua conta.
              </a>
            </label>




          </form>




        </div>



      </section>
      <FooterComponent />
    </section>
  );
}