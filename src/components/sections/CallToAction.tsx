import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface CallToActionProps {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'inverted';
  className?: string;
}

export function CallToAction({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
  className,
}: CallToActionProps) {
  const isInverted = variant === 'inverted';
  
  return (
    <section className={className}>
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-0 lg:flex-1">
            <h2 
              className={cn(
                'text-3xl font-extrabold tracking-tight sm:text-4xl',
                isInverted ? 'text-gray-900' : 'text-white'
              )}
            >
              {title}
            </h2>
            <p 
              className={cn(
                'mt-3 max-w-3xl text-lg leading-6',
                isInverted ? 'text-gray-700' : 'text-blue-100'
              )}
            >
              {description}
            </p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button
                asChild
                size="lg"
                className={cn(
                  'w-full px-8 py-3 text-base font-medium md:py-4 md:px-10',
                  isInverted 
                    ? 'bg-white text-blue-700 hover:bg-blue-50' 
                    : 'bg-white text-blue-700 hover:bg-blue-50'
                )}
              >
                <Link href={primaryAction.href}>
                  {primaryAction.text}
                </Link>
              </Button>
            </div>
            {secondaryAction && (
              <div className="ml-3 inline-flex rounded-md shadow">
                <Button
                  asChild
                  variant={isInverted ? 'outline' : 'secondary'}
                  size="lg"
                  className="w-full px-8 py-3 text-base font-medium md:py-4 md:px-10"
                >
                  <Link href={secondaryAction.href}>
                    {secondaryAction.text}
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
