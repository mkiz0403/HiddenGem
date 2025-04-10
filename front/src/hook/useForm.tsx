import {useState} from 'react';
import React from 'react';
import {View} from 'react-native';

interface UseFormProps<T> {
  initialValues: T;
}

export default function useForm<T>({initialValues}: UseFormProps<T>) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState<Record<string, boolean>>();

  const handleChangeText = (name: keyof T, text: string) => {
    setValues({
      ...values,
      [name]: text,
    });
    setTouched({
      ...touched,
      [name]: false,
    });
  };

  const handleBlur = (name: keyof T) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTextInputProps = (name: keyof T) => {
    const value = values[name];
    const onChangeText = (text: string) => handleChangeText(name, text);
    const onBlur = () => handleBlur(name);

    return {value, onChangeText, onBlur};
  };

  return {values, touched, getTextInputProps};
}
