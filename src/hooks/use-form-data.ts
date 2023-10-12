import { ChangeEvent, FormEvent, useState } from 'react';

type Input = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export const useFormData = <TData>(defaultValues: TData) => {
  const [data, setData] = useState(defaultValues);

  const handleChange = (e: ChangeEvent<Input>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeNumber = (e: ChangeEvent<Input>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: +e.target.value,
    }));
  };

  const register = (
    name: keyof TData,
    type: 'string' | 'number' = 'string'
  ): {
    name: keyof TData;
    value: any;
    onChange: (e: ChangeEvent<Input>) => void;
  } => {
    return {
      name,
      value: data[name],
      onChange: type === 'string' ? handleChange : handleChangeNumber,
    };
  };

  const reset = () => setData(defaultValues);

  const handleSubmit = (callback: (data: TData) => void) => (e: FormEvent) => {
    e.preventDefault();
    callback(data);
  };

  return {
    data,
    setData,
    handleChange,
    handleChangeNumber,
    register,
    reset,
    handleSubmit,
  };
};
