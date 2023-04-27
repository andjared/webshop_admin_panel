"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TextInput from "./TextInput";
import { IProduct } from "@/types/types";
import { ProductService } from "@/services/ProductService";

export interface Props {
  product?: IProduct;
  formType: "edit" | "create";
}

export default function ProductsForm({ product, formType }: Props) {
  const router = useRouter();

  const formData: Omit<IProduct, "id"> = {
    title: "",
    info: "",
    description: "",
    img: "",
    price: "",
  };

  //on edit page set form data to product props
  const [data, setData] = useState(formType === "edit" ? product! : formData);

  const { title, info, description, img, price } = data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const uploaded = `/images/${e.target.files![0].name}`;
    setData({ ...data, img: uploaded });
  };

  const handleEdit = async (data: IProduct) => {
    await ProductService.editProduct(data, data.id!);
    router.push("/");
  };

  const handleCreate = async (data: Omit<IProduct, "id">) => {
    await ProductService.createProduct(data);
    router.push("/");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formType === "edit" ? handleEdit(data) : handleCreate(data);
  };

  return (
    <form
      className="max-w-3xl flex flex-col justify-center mx-auto my-8 gap-4 px-2 text-base"
      onSubmit={handleSubmit}
    >
      <TextInput value={title} name="title" handleChange={handleChange} />
      <TextInput value={info} name="info" handleChange={handleChange} />
      <label className="block">
        <span className="block text-md font-medium text-slate-700 py-1">
          Description
        </span>
        <textarea
          placeholder={description}
          name="description"
          rows={3}
          className="form-text"
          onChange={handleChange}
        />
      </label>
      <TextInput value={price} name="price" handleChange={handleChange} />
      <div className="flex flex-col justify-between gap-3">
        <label htmlFor="fileUpload" className="pointer-events-none">
          <a className="bg-accent px-3 py-2 text-md text-white font-medium cursor-pointer pointer-events-auto">
            Select image
          </a>
        </label>

        {img && (
          <div className="relative h-96 w-full object-cover">
            <Image src={img} alt={title} fill />
          </div>
        )}
        <input
          id="fileUpload"
          name="img"
          type="file"
          className="hidden"
          onChange={handleImgChange}
        />
      </div>
      <div className="flex gap-2 border-t-2 border-l-rose-50 py-4">
        <button
          type="submit"
          className="bg-positive outline-slate-400 outline-offset-3 text-slate-100 font-medium px-4 py-2"
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
