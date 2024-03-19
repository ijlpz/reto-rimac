import {
  ChangeEvent,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Icon } from '../Icon/Icon';

interface Props {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'lg';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'rounded' | 'square';
  activeColor?: 'black' | 'green';
  feedback?: string;
}

export const Checkbox: FC<Props> = ({
  name,
  value,
  checked = false,
  disabled = false,
  className,
  onChange,
  size = 'xs',
  children,
  feedback = '',
  activeColor = 'black',
  type = 'square',
}) => {
  const bgColor = activeColor === 'black' ? 'bg-black' : 'bg-green-500';
  const borderRadius = type === 'square' ? 'rounded' : 'rounded-full';

  const [defaultName, setDefaultName] = useState<string>();

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (typeof onChange === 'function') {
        onChange(e);
      }
    },
    [onChange],
  );

  useEffect(() => {
    if (!name) {
      setDefaultName(`input_${Date.now()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`flex items-center text-base text-gray-1 ${className || ''}`}
    >
      <div className="relative flex items-center">
        <input
          id={name || defaultName}
          type="checkbox"
          name={name || defaultName}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={changeHandler}
          className={`
        appearance-none
        ${size === 'lg' ? 'w-7 h-7' : size === 'sm' ? 'w-6 h-6' : 'w-5 h-5'} 
        border
        transition-all
        ${
          disabled
            ? 'border-gray-200'
            : checked
            ? activeColor === 'black'
              ? 'border-black'
              : 'border-green-500'
            : 'border-gray-600'
        }
        ${checked ? (disabled ? 'bg-gray-4' : `${bgColor}`) : 'bg-white'} 
        ${borderRadius}
        ${feedback ? `border-primary` : `border-gray-600`}
      `}
          data-testid={name}
        />
        {checked && (
          <Icon
            name="CheckboxMarkIcon"
            className={`
        absolute pointer-events-none
        ${
          size === 'lg'
            ? 'left-[1px] top-[1px]'
            : size === 'sm'
            ? 'left-[3px] top-[3px]'
            : 'left-[2px] top-[1px]'
        }
         
        transition-all
        ${checked ? 'text-white' : 'text-transparent'}
      `}
            size={size === 'lg' ? 20 : size === 'sm' ? 14 : 12}
          />
        )}
      </div>
      {children && (
        <label
          htmlFor={name}
          className={`ml-2.5 text-sm ${disabled ? 'opacity-40' : ''}  ${
            feedback ? `text-primary` : 'text-secondary'
          }`}
        >
          {children}
        </label>
      )}
    </div>
  );
};
