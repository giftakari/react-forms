import React, { ChangeEvent, useState } from 'react';

interface TextInputProps {
    type?:string;
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

const TextInput: React.FC<TextInputProps> = ({
    type="text",
  label,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  minLength,
  maxLength,
}) => {
  const [touched, setTouched] = useState(false);

  const isInvalid = required && touched && !value.trim();

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div>
      <label htmlFor={id}>
        {label} {required && <span style={{ color: isInvalid ? 'red' : 'inherit' }}>*</span>}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        style={{ border: isInvalid ? '1px solid red' : '1px solid black' }}
      />
      {isInvalid && <p style={{ color: 'red', margin: 0 }}>This field is required.</p>}
    </div>
  );
};

export default TextInput;
