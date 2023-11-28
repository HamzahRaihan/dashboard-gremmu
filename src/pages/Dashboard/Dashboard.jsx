import { Link } from "react-router-dom";
import { FaUserGroup, FaNewspaper, FaVideo, FaSignsPost } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="items-stretch self-stretch flex flex-col">
          <div className="items-stretch flex w-full justify-between gap-5 mt-2 px-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-black text-3xl font-medium leading-10 grow shrink basis-auto">Dashboard Admin</div>
          </div>
          <div className="items-stretch flex w-full gap-5 mt-10 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="justify-end border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex grow basis-[0%] flex-col px-5 py-4 rounded-xl border-solid items-end">
              <div className="items-stretch flex w-[213px] max-w-full justify-between gap-5">
                <div className="justify-center items-center bg-gray-200 flex aspect-[1.0408163265306123] flex-col px-2.5 py-2.5 rounded-[50px]">
                  <FaUserGroup className="aspect-square object-contain object-center w-8 overflow-hidden" />
                </div>
                <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-black text-opacity-50 text-sm font-medium leading-5 tracking-normal">Users</div>
                  <div className="text-black text-2xl font-medium leading-5 tracking-normal mt-2">2</div>
                </div>
              </div>
            </div>
            <div className="justify-end border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex grow basis-[0%] flex-col px-5 py-4 rounded-xl border-solid items-end">
              <div className="items-stretch flex w-[213px] max-w-full justify-between gap-5">
                <div className="justify-center items-center bg-gray-200 flex aspect-[1.0408163265306123] flex-col px-2.5 py-2.5 rounded-[50px]">
                  <FaNewspaper className="aspect-square object-contain object-center w-8 overflow-hidden" />
                </div>
                <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-black text-opacity-50 text-sm font-medium leading-5 tracking-normal">News</div>
                  <div className="text-black text-2xl font-medium leading-5 tracking-normal mt-2">12</div>
                </div>
              </div>
            </div>
            <div className="justify-end border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex grow basis-[0%] flex-col px-5 py-4 rounded-xl border-solid items-end">
              <div className="items-stretch flex w-[213px] max-w-full justify-between gap-5">
                <div className="justify-center items-center bg-gray-200 flex aspect-[1.0408163265306123] flex-col px-2.5 py-2.5 rounded-[50px]">
                  <FaVideo loading="lazy" className="aspect-square object-contain object-center w-8 overflow-hidden" />
                </div>
                <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-black text-opacity-50 text-sm font-medium leading-5 tracking-normal">Videos</div>
                  <div className="text-black text-2xl font-medium leading-5 tracking-normal mt-2">12</div>
                </div>
              </div>
            </div>
            <div className="justify-end border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex grow basis-[0%] flex-col px-5 py-4 rounded-xl border-solid items-end">
              <div className="items-stretch flex w-[213px] max-w-full justify-between gap-5">
                <div className="justify-center items-center bg-gray-200 flex aspect-[1.0408163265306123] flex-col px-2.5 py-2.5 rounded-[50px]">
                  <FaSignsPost loading="lazy" className="aspect-square object-contain object-center w-8 overflow-hidden" />
                </div>
                <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-black text-opacity-50 text-sm font-medium leading-5 tracking-normal">Post</div>
                  <div className="text-black text-2xl font-medium leading-5 tracking-normal mt-2">50</div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-stretch border border-[color:var(--neutral-700,#D1D9E2)] shadow-sm bg-slate-50 flex w-full flex-col mt-8 pb-3 rounded-xl border-solid max-md:max-w-full">
            <div className="items-stretch border-b-[color:var(--neutral-700,#D1D9E2)] bg-slate-50 flex w-full flex-col px-5 py-4 border-b border-solid max-md:max-w-full">
              <div className="items-center flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-base font-medium leading-5 tracking-normal my-auto">Reported Post by Users</div>
                <div className="items-center border border-[color:var(--neutral-5,#D9D9D9)] bg-white self-stretch flex justify-between gap-5 pl-3 rounded-sm border-solid">
                  <div className="text-black text-opacity-30 text-sm leading-6 my-auto">input search text</div>
                  <div className="justify-center items-center self-stretch border border-[color:var(--neutral-5,#D9D9D9)] flex aspect-square flex-col p-2.5 border-solid">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/972270d0-6d25-4e69-8316-d024d9ef57c4?" className="aspect-square object-contain object-center w-3.5 overflow-hidden" />
                  </div>
                </div>
              </div>
            </div>
            {/* table */}

            {/* pagination */}
            <nav className="mx-auto">
              <ul className="inline-flex space-x-4 text-base h-10">
                <Link>
                  <span className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Previous
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    1
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    2
                  </span>
                </Link>
                <Link>
                  <span aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                    3
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    4
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    5
                  </span>
                </Link>
                <Link>
                  <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
