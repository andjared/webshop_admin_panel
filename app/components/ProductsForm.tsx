"use client";
import { IProduct } from "@/types";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface Props {
  handleSubmit: (e: any, data: IProduct) => void;
  product?: IProduct;
}

export default function ProductsForm({ handleSubmit, product }: Props) {
  const formData = {
    title: "",
    info: "",
    description: "",
    img: "",
    price: "",
  };

  const [data, setData] = useState<IProduct>(product || formData);

  const { id, title, info, description, img, price } = data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
  ): void => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form className="max-w-3xl flex flex-col justify-center mx-auto my-8 gap-4 px-2 text-base">
      <label className="block">
        <span className="block text-md font-medium text-slate-700 py-1">
          Title
        </span>
        <input
          placeholder={title}
          type="text"
          name="title"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          onChange={handleChange}
        />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-slate-700 py-1">
          Info
        </span>
        <input
          placeholder={info}
          type="text"
          name="info"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          onChange={handleChange}
        />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-slate-700 py-1">
          Description
        </span>
        <textarea
          placeholder={description}
          name="description"
          rows={3}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          onChange={handleChange}
        />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-slate-700 py-1">
          Price
        </span>
        <input
          placeholder={price}
          type="text"
          name="price"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          onChange={handleChange}
        />
      </label>
      <div className="flex flex-col justify-between gap-3">
        <label htmlFor="fileUpload" className="pointer-events-none">
          <a className="bg-accent px-3 py-2 text-md text-white font-medium cursor-pointer pointer-events-auto">
            Select image
          </a>
        </label>
        {/* <div className="relative h-96 w-full object-cover">
          <Image src={img} alt={title} fill />
        </div> */}
        <input
          id="fileUpload"
          name="img"
          type="file"
          className="hidden"
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2 border-t-2 border-l-rose-50 py-4">
        <button
          className="bg-positive outline-slate-400 outline-offset-3 text-slate-100 font-medium px-4 py-2"
          onClick={(e) => handleSubmit(e, data)}
        >
          Save
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
