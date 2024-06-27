// export function FormRegisterComponent() {
//     return (
//       <section className="w-full flex h-[45vw] justify-center items-center bg-white">
//         <div
//           className="
//           flex
//           bg-[#DAE2E8]
//           shadow-lg
//           justify-center
//           items-center
//           flex-col
//           shadow-[#afb6bb]
//           rounded
//           px-8
//           pt-2
//           pb-8
//           m-2
//           mb-2
//           h-xl
//           w-full
//           max-w-96"
//         >
//           <label className="block text-gray-700 font-bold m-2 py-1 ">
//             Cadastras sua conta
//           </label>

//           <form
//             action=""
//             onSubmit={handleRegister}
//             className="
//           flex 
//           justify-center 
//           items-center
//           flex-col"
//           >
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
//               type="text"
//               placeholder="Nome Completo"
//               onChange={(e) => setName(e.target.value)}
//               id=""
//               name=""
//             />

//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
//               type="text"
//               placeholder="CPF/RNE"
//               onChange={(e) => setDocument(e.target.value)}
//               id=""
//               name=""
//             />

//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
//               type="email"
//               placeholder="Seu email"
//               onChange={(e) => setEmail(e.target.value)}
//               id=""
//               name=""
//             />

//             <select
//               name=""
//               id=""
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
//             >
//               <option disabled selected>
//                 Selecione seu gênero
//               </option>

//               <option
//                 onChange={(e) => setGender(e.currentTarget.value)}
//                 value="masculino"
//               >
//                 Masculino
//               </option>
//               <option
//                 onChange={(e) => setGender(e.currentTarget.value)}
//                 value="feminino"
//               >
//                 Feminino
//               </option>
//               <option
//                 onChange={(e) => setGender(e.currentTarget.value)}
//                 value="outros"
//               >
//                 Outros
//               </option>
//             </select>

//             <div className="w-full">
//               <div className="relative max-w-sm">
//                 <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                   <svg
//                     className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </div>
//                 <Datepicker
//                   displayFormat=""
//                   // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   onChange={handleValueChange}
//                   value={dateBorn}
//                 />
//               </div>
//             </div>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
//               type="password"
//               placeholder="Senha"
//               onChange={(e) => setpassword(e.target.value)}
//               id=""
//               name=""
//             />

//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4 w-64"
//               type="password"
//               placeholder="Repetir senha"
//               onChange={(e) => setpassword(e.target.value)}
//               id=""
//               name=""
//             />

//             <button
//               onClick={handleRegister}
//               className="flex items-center shadow-lg justify-center py-4 bg-[#1348D0] rounded-md w-[177px] h-[39px] m-4 "
//             >
//               Cadastrar
//             </button>

//             <label htmlFor="" className=" text-gray-700  py-1">
//               Já possui uma conta?
//               <a href="/login" className="text-blue-700">
//                 {" "}
//                 Acesse sua conta.
//               </a>
//             </label>
//           </form>
//         </div>
//       </section>
//     );
// }