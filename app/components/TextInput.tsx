import React from "react";

interface Props {
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({ value, name, handleChange }: Props) {
  return (
    <label className="block">
      <span className="block text-md font-medium text-slate-700 py-1 capitalize">
        {name}
      </span>
      <input
        value={value}
        type="text"
        name={name}
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        onChange={handleChange}
      />
    </label>
  );
}
