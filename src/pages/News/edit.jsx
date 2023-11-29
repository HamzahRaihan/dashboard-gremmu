import { FaCloudArrowUp } from "react-icons/fa6";
import { Button, FileInput, Label } from "flowbite-react";

const Edit = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="items-stretch self-stretch flex flex-col">
          <div className="flex gap-5 mt-2 px-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-black text-3xl font-medium  shrink basis-auto">News</div>
            <Button color="success">Simpan</Button>
          </div>
        </div>
        <div className="items-stretch border border-gray-300 shadow-sm bg-slate-50 flex w-full flex-col mt-8 p-4 rounded-xl border-solid max-md:max-w-full">
          <div className="mt-10">
            <label className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">Title</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Title"
              required
            ></input>
          </div>

          <div className="mt-5">
            <label className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">Content</label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Write your content here..."
            ></textarea>
          </div>

          {/* upload foto */}
          <div className="flex flex-col w-4/5 mt-5">
            <span className="relative mb-2 text-md font-semibold text-gray-900 dark:text-white">Header Image</span>
            <Label
              htmlFor="dropzone-file"
              className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <FaCloudArrowUp className="text-3xl" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <FileInput id="dropzone-file" className="hidden" />
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
