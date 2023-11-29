import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa6";
import { Checkbox, Table } from "flowbite-react";

const Users = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="items-stretch self-stretch flex flex-col">
          <div className="items-stretch flex w-full justify-between gap-5 mt-2 px-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-black text-3xl font-medium leading-10 grow shrink basis-auto">Users</div>
          </div>

          <div className="items-stretch border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex w-full flex-col mt-8 pb-3 rounded-xl border-solid max-md:max-w-full">
            <div className="items-stretch border-b-[color:var(--neutral-700,#D1D9E2)] bg-slate-50 flex w-full flex-col px-5 py-4 border-b border-solid max-md:max-w-full">
              <div className="items-center flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-base font-medium leading-5 tracking-normal my-auto">Users</div>
                <div className="items-center bg-white self-stretch flex justify-between gap-5 pl-3">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-green-50 rounded-lg border-2 border-green-300 focus:ring-2 focus:border-green-500 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:border-green-500"
                      placeholder="Search"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      <FaSistrix />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* table */}
            <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="p-4">
                    <Checkbox />
                  </Table.HeadCell>
                  <Table.HeadCell>Username</Table.HeadCell>
                  <Table.HeadCell>Bio</Table.HeadCell>
                  <Table.HeadCell>Date</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="flex items-center gap-6 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/Jese%20Leos.png?updatedAt=1697535830098" className="w-8 h-8 rounded-full" alt="user photo" />
                      <h1>John Doe</h1>
                    </Table.Cell>
                    <Table.Cell>Seorang peminat kebersihan bumi yang penuh semangat, selalu sia..</Table.Cell>
                    <Table.Cell>7 September 2023, 23:07</Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="flex items-center gap-6 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/image%2012.png?updatedAt=1701235707834" className="w-8 h-8 rounded-full" alt="user photo" />
                      <h1>F. Scott Fitzgerald</h1>
                    </Table.Cell>
                    <Table.Cell>Wahai admin tolonng jadikan aku admin</Table.Cell>
                    <Table.Cell>1 September 2023, 10:07</Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>

            {/* pagination */}
            <nav className="mx-auto mt-9">
              <ul className="flex text-sm md:text-base">
                <Link>
                  <span className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Previous
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    1
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    2
                  </span>
                </Link>
                <Link>
                  <span
                    aria-current="page"
                    className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    4
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                  </span>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
