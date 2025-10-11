import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, id: propId, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = propId || generatedId;
    
    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={checkboxId}
            type="checkbox"
            ref={ref}
            className={cn(
              'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500',
              {
                'border-red-500': error,
              },
              className
            )}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          {label && (
            <label
              htmlFor={checkboxId}
              className="font-medium text-gray-700"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-gray-500">{description}</p>
          )}
          {error && (
            <p className="text-red-600">{error}</p>
          )}
        </div>
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
