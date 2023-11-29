import { Link } from "react-router-dom";
import { FaUserGroup, FaNewspaper, FaVideo, FaSignsPost, FaSistrix } from "react-icons/fa6";
import { Checkbox, Table } from "flowbite-react";

const Dashboard = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-green-200 border-dashed rounded-lg dark:border-green-700 mt-14">
        <div className="items-stretch self-stretch flex flex-col">
          <div className="items-stretch flex w-full justify-between gap-5 mt-2 px-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-black text-3xl font-medium leading-10 grow shrink basis-auto">Dashboard Admin</div>
          </div>

          {/* card */}
          <div className="items-stretch flex w-full gap-5 mt-10 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="justify-end border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex grow basis-[0%] flex-col px-5 py-4 rounded-xl border-solid items-end">
              <div className="items-stretch flex w-[213px] max-w-full justify-between gap-5">
                <div className="justify-center items-center bg-green-200 flex aspect-[1.0408163265306123] flex-col px-2.5 py-2.5 rounded-[50px]">
                  <FaUserGroup className="aspect-square object-contain object-center w-8 overflow-hidden text-green-500" />
                </div>
                <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-black text-opacity-50 text-sm font-medium leading-5 tracking-normal">Users</div>
                  <div className="text-black text-2xl font-medium leading-5 tracking-normal mt-2">2</div>
                </div>
              </div>
            </div>
            <div className="justify-end border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex grow basis-[0%] flex-col px-5 py-4 rounded-xl border-solid items-end">
              <div className="items-stretch flex w-[213px] max-w-full justify-between gap-5">
                <div className="justify-center items-center bg-green-200 flex aspect-[1.0408163265306123] flex-col px-2.5 py-2.5 rounded-[50px]">
                  <FaNewspaper className="aspect-square object-contain object-center w-8 overflow-hidden text-green-500" />
                </div>
                <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-black text-opacity-50 text-sm font-medium leading-5 tracking-normal">News</div>
                  <div className="text-black text-2xl font-medium leading-5 tracking-normal mt-2">12</div>
                </div>
              </div>
            </div>
            <div className="justify-end border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex grow basis-[0%] flex-col px-5 py-4 rounded-xl border-solid items-end">
              <div className="items-stretch flex w-[213px] max-w-full justify-between gap-5">
                <div className="justify-center items-center bg-green-200 flex aspect-[1.0408163265306123] flex-col px-2.5 py-2.5 rounded-[50px]">
                  <FaVideo loading="lazy" className="aspect-square object-contain object-center w-8 overflow-hidden text-green-500" />
                </div>
                <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-black text-opacity-50 text-sm font-medium leading-5 tracking-normal">Videos</div>
                  <div className="text-black text-2xl font-medium leading-5 tracking-normal mt-2">12</div>
                </div>
              </div>
            </div>
            <div className="justify-end border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex grow basis-[0%] flex-col px-5 py-4 rounded-xl border-solid items-end">
              <div className="items-stretch flex w-[213px] max-w-full justify-between gap-5">
                <div className="justify-center items-center bg-green-200 flex aspect-[1.0408163265306123] flex-col px-2.5 py-2.5 rounded-[50px]">
                  <FaSignsPost loading="lazy" className="aspect-square object-contain object-center w-8 overflow-hidden text-green-500" />
                </div>
                <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-black text-opacity-50 text-sm font-medium leading-5 tracking-normal">Post</div>
                  <div className="text-black text-2xl font-medium leading-5 tracking-normal mt-2">50</div>
                </div>
              </div>
            </div>
          </div>
          {/* user report */}
          <div className="items-stretch border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex w-full flex-col mt-8 pb-3 rounded-xl border-solid max-md:max-w-full">
            <div className="items-stretch border-b-[color:var(--neutral-700,#D1D9E2)] bg-slate-50 flex w-full flex-col px-5 py-4 border-b border-solid max-md:max-w-full">
              <div className="items-center flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-base font-medium leading-5 tracking-normal my-auto">Reported Post by Users</div>
                <div className="items-center bg-white self-stretch flex justify-between gap-5 pl-3">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-green-900 bg-green-50 rounded-lg border-2 border-green-300 focus:ring-2 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white  focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500"
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
                  <Table.HeadCell>Post</Table.HeadCell>
                  <Table.HeadCell>Reason</Table.HeadCell>
                  <Table.HeadCell>Date</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-green-700 dark:bg-green-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="flex items-center gap-6 whitespace-nowrap font-medium text-green-900 dark:text-white">
                      <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/Jese%20Leos.png?updatedAt=1697535830098" className="w-8 h-8 rounded-full" alt="user photo" />
                      <h1>John Doe</h1>
                    </Table.Cell>
                    <Table.Cell>Mari bergandengan tangan dalam menjaga kebersihan bumi ini da...</Table.Cell>
                    <Table.Cell>Spam</Table.Cell>
                    <Table.Cell>7 September 2023, 23:07</Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-green-700 dark:bg-green-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="flex items-center gap-6 whitespace-nowrap font-medium text-green-900 dark:text-white">
                      <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/Jese%20Leos.png?updatedAt=1697535830098" className="w-8 h-8 rounded-full" alt="user photo" />
                      <h1>John Doe</h1>
                    </Table.Cell>
                    <Table.Cell>Mari bergandengan tangan dalam menjaga kebersihan bumi ini da...</Table.Cell>
                    <Table.Cell>Spam</Table.Cell>
                    <Table.Cell>7 September 2023, 23:07</Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-green-700 dark:bg-green-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="flex items-center gap-6 whitespace-nowrap font-medium text-green-900 dark:text-white">
                      <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/Jese%20Leos.png?updatedAt=1697535830098" className="w-8 h-8 rounded-full" alt="user photo" />
                      <h1>John Doe</h1>
                    </Table.Cell>
                    <Table.Cell>Mari bergandengan tangan dalam menjaga kebersihan bumi ini da...</Table.Cell>
                    <Table.Cell>Spam</Table.Cell>
                    <Table.Cell>7 September 2023, 23:07</Table.Cell>
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
                  <span className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 ms-0 leading-tight text-green-500 bg-white border border-e-0 border-green-300 rounded-lg hover:bg-green-100 hover:text-green-700 dark:bg-green-800 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white">
                    Previous
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 leading-tight text-green-500 bg-white border border-green-300 hover:bg-green-100 hover:text-green-700 dark:bg-green-800 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white">
                    1
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 leading-tight text-green-500 bg-white border border-green-300 hover:bg-green-100 hover:text-green-700 dark:bg-green-800 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white">
                    2
                  </span>
                </Link>
                <Link>
                  <span
                    aria-current="page"
                    className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 text-blue-600 border border-green-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-green-700 dark:bg-green-700 dark:text-white"
                  >
                    3
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 leading-tight text-green-500 bg-white border border-green-300 hover:bg-green-100 hover:text-green-700 dark:bg-green-800 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white">
                    4
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-3 md:px-4 h-8 md:h-10 leading-tight text-green-500 bg-white border border-green-300 rounded-lg hover:bg-green-100 hover:text-green-700 dark:bg-green-800 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white">
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
export default Dashboard;
