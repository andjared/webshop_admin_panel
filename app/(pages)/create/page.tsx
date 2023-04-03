import Link from "next/link";

function Create() {
  return (
    <form className="max-w-3xl flex flex-col justify-center mx-auto my-8 gap-4 px-2">
      <label className="block">
        <span className="block text-md font-medium text-slate-700">Title </span>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-slate-700">Info </span>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-slate-700">
          Description
        </span>
        <textarea
          rows={3}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <div className="flex flex-col justify-between gap-3">
        <label htmlFor="fileUpload" className="pointer-events-none">
          <a className="bg-slate-500 px-3 py-2 text-md text-white font-bold cursor-pointer pointer-events-auto">
            Select image
          </a>
        </label>
        <input id="fileUpload" name="image" type="file" className="hidden" />
      </div>
      <div className="flex gap-2 border-t-2 border-l-rose-50 py-4">
        <button className="bg-green-400 outline-slate-400 outline-offset-3 text-slate-100 px-4 py-2 ">
          Save
        </button>
        <button className="bg-red-400 outline-slate-400 outline-offset-3 text-slate-100 px-4 py-2 ">
          <Link href="/">Cancel</Link>
        </button>
      </div>
    </form>
  );
}

export default Create;
