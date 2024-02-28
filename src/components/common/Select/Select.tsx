import React, { ChangeEvent, CSSProperties, FunctionComponent, useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  selectStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  onChange?: (value: string) => void;
}

export const Select: FunctionComponent<SelectProps> = ({
  options,
  value,
  name,
  disabled = false,
  className,
  selectStyle,
  labelStyle,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedValue(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div className={`${className || ''} relative`}>
      <select
        id={name}
        name={name}
        value={selectedValue}
        className={`
          block w-full h-14 p-4 pr-12 bg-transparent text-base
          rounded-lg border
          ${disabled ? 'text-gray-300 border-gray-300' : 'border-gray-600'}
          focus:outline-none
          appearance-none
        `}
        style={selectStyle}
        disabled={disabled}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className={`h-6 w-6 text-gray-600 ${disabled ? 'text-gray-300' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
