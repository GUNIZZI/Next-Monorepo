import * as React from 'react';

import { Label } from '@ui/components/atoms';
import { cn } from '@ui/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
    error?: string;
    label?: string;
    helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, error, label, helperText, ...props }, ref) => {
        const [isFocused, setIsFocused] = React.useState(false);

        const inputElement = (
            <div className="relative">
                // 라벨이 있으면
                {label && (
                    <Label className="block text-sm font-medium text-gray-700">
                        {label}
                    </Label>
                )}
                <input
                    type={type}
                    className={cn(
                        'flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                        error
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'border-input focus-visible:ring-ring',
                        className
                    )}
                    ref={ref}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                // 에러가 있으면
                {error && !isFocused && (
                    <div className="absolute inset-0 flex items-center justify-center w-full h-full p-1 text-xs text-red-500 bg-red-50/95 pointer-events-none text-ellipsis">
                        {error}
                    </div>
                )}
            </div>
        );

        return inputElement;
    }
);
Input.displayName = 'Input';

export { Input };
