import React from "react";

interface Person {
  name: string;
  title: string;
  email: string;
  role: string;
}

const people: Person[] = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const TableProtocol: React.FC = () => {
  return (
    <div className="bg-white max-w-full">
      <div className="mx-auto max-w-none">
        <div className="bg-white py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0"
                        >
                          Nome completo
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                        >
                          Protocolo
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                        >
                          Data de envio
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                      <tbody className="divide-y m-2 divide-gray-800">
                        {people.map((person) => (
                          <tr className="bg-[#D9D9D9]" key={person.email}>
                            <td className=" whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-0">
                              {person.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
                              {person.title}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
                              {person.email}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
                              {person.role}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <a
                                href="#"
                                className="text-indigo-400 hover:text-indigo-300"
                              >
                                Edit
                                <span className="sr-only">, {person.name}</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableProtocol;
