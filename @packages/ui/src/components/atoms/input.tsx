import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { Label } from '@ui/components/atoms';
import { cn } from '@ui/lib/utils';

const inputVariants = cva(
    'flex h-9 w-full rounded-md border bg-transparent text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
    {
        variants: {
            variant: {
                default: '',
                destructive:
                    'border border-input border-destructive bg-destructive/10 text-destructive placeholder:text-destructive/60 focus-visible:ring-destructive focus-visible:ring-destructive text-xs',
                outline:
                    'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:bg-white',
                secondary:
                    'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'border-0 hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                lg: 'h-10 rounded-md px-8',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

type InputBaseProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

interface InputProps
    extends InputBaseProps,
        VariantProps<typeof inputVariants> {
    // interface InputProps extends React.ComponentProps<'input'> {
    error?: string;
    label?: string;
    helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        { className, type, error, label, helperText, variant, size, ...props },
        ref
    ) => {
        const [isFocused, setIsFocused] = React.useState(false);

        const inputElement = (
            <div className="relative">
                {/* 라벨이 있으면 */}
                {label && (
                    <Label className="block text-sm font-medium text-gray-700">
                        {label}
                    </Label>
                )}
                <input
                    type={type}
                    className={cn(
                        inputVariants({ variant, size }),
                        // 'flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                        error ? 'destructive' : '',
                        className
                    )}
                    ref={ref}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                {/* 에러가 있으면 */}
                {error && !isFocused && (
                    <div className="absolute inset-0 flex py-1 px-3 items-center justify-left w-full h-full text-xs text-red-500 bg-red-50/95 pointer-events-none text-ellipsis">
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
