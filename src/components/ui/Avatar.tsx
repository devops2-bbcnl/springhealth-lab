import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex shrink-0 overflow-hidden rounded-full bg-gray-100',
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
Avatar.displayName = 'Avatar';

interface AvatarImageProps extends React.ComponentProps<typeof Image> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const AvatarImage = React.forwardRef<HTMLDivElement, AvatarImageProps>(
  ({ className, src, alt, width = 40, height = 40, ...props }, ref) => (
    <div className={cn('relative h-full w-full', className)} ref={ref}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full rounded-full object-cover"
        {...props}
      />
    </div>
  )
);
AvatarImage.displayName = 'AvatarImage';

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {
  delayMs?: number;
}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, children, delayMs, ...props }, ref) => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
      const timer = setTimeout(() => setIsMounted(true), delayMs || 0);
      return () => clearTimeout(timer);
    }, [delayMs]);

    return isMounted ? (
      <span
        ref={ref}
        className={cn(
          'flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-gray-600',
          className
        )}
        {...props}
      >
        {children}
      </span>
    ) : null;
  }
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };
