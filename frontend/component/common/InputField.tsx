'use client';

import React, { InputHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // Menggunakan cn untuk menggabungkan class dengan lebih aman

const inputStyles = cva(
  'flex h-10 w-full rounded-md border bg-transparent py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      hasError: {
        true: 'border-red-500 text-red-600 focus-visible:ring-red-500',
        false: 'border-gray-300',
      },
    },
    defaultVariants: {
      hasError: false,
    }
  }
);

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  Icon?: React.ElementType;
  containerClassName?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, id, name, error, Icon, containerClassName, ...props }, ref) => {
    // Gunakan 'id' jika ada, jika tidak gunakan 'name', untuk konsistensi
    const inputId = id || name;

    return (
      <div className={cn('w-full', containerClassName)}>
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <div className="relative">
          {Icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          )}
          <input
            id={inputId}
            name={name}
            className={cn(
              inputStyles({ hasError: !!error }),
              Icon ? 'pl-10' : 'pl-3', // Padding ditambahkan secara dinamis
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

// Ubah baris ini dari 'export { InputField }' menjadi 'export default InputField'
export default InputField;