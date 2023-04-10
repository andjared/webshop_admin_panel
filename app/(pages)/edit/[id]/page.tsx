"use client";
import { products } from "@/products";
import Image from "next/image";
import Link from "next/link";

export interface Props {
  params: { id: string };
}

function Edit({ params: { id } }: Props) {
  const product = products.find((product) => product.id === Number(id));
  const { title, info, description, img } = product!;

  return (
    <form className="max-w-3xl flex flex-col justify-center mx-auto my-8 gap-4 px-2 text-base">
      <label className="block">
        <span className="block text-md font-medium text-slate-700 py-1">
          Title
        </span>
        <input
          type="text"
          placeholder={title}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-slate-700 py-1">
          Info
        </span>
        <input
          type="text"
          placeholder={info}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-slate-700 py-1">
          Description
        </span>
        <textarea
          rows={3}
          placeholder={description}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-slate-700 py-1">
          Price
        </span>
        <input
          type="text"
          placeholder={"10"}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <div className="flex flex-col justify-between gap-4">
        <label htmlFor="fileUpload" className="pointer-events-none">
          <a className="bg-accent text-md text-white font-medium cursor-pointer pointer-events-auto py-2 px-3">
            Select image
          </a>
        </label>
        <input id="fileUpload" name="image" type="file" className="hidden" />
        <div className="relative h-96 w-full object-cover">
          <Image src={img} alt={title} fill />
        </div>
      </div>
      <div className="flex gap-2 border-t-2 border-l-rose-50 py-4">
        <button className="bg-positive outline-slate-400 outline-offset-3 text-slate-100 font-medium px-4 py-2 ">
          Save Changes
        </button>
        <Link href="/">
          <button className="bg-warning outline-slate-400 outline-offset-3 text-slate-100 font-medium px-4 py-2 ">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
}

export default Edit;
