import React from "react";

export interface Props {
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
        className="form-text"
        onChange={handleChange}
      />
    </label>
  );
}
