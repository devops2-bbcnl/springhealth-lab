import { BeakerIcon, HeartIcon, UserGroupIcon, ClockIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const services = [
  {
    id: 1,
    name: 'Hematology',
    description: 'Complete blood count, hemoglobin, and other blood-related tests to evaluate your overall health.',
    icon: BeakerIcon,
    href: '/services/hematology',
  },
  {
    id: 2,
    name: 'Clinical Chemistry',
    description: 'Comprehensive metabolic panels, liver function tests, and electrolyte analysis for disease detection.',
    icon: HeartIcon,
    href: '/services/clinical-chemistry',
  },
  {
    id: 3,
    name: 'Microbiology',
    description: 'Bacterial cultures, sensitivity testing, and pathogen identification for accurate diagnosis.',
    icon: UserGroupIcon,
    href: '/services/microbiology',
  },
  {
    id: 4,
    name: 'Immunology',
    description: 'Allergy testing, autoimmune disease panels, and immune function assessments.',
    icon: ShieldCheckIcon,
    href: '/services/immunology',
  },
  {
    id: 5,
    name: 'Hormone Testing',
    description: 'Thyroid, reproductive, and adrenal hormone testing for hormonal balance assessment.',
    icon: ClockIcon,
    href: '/services/hormone-testing',
  },
  {
    id: 6,
    name: 'Genetic Testing',
    description: 'DNA analysis for genetic disorders, ancestry, and personalized medicine.',
    icon: DocumentTextIcon,
    href: '/services/genetic-testing',
  },
];

interface ServicesSectionProps {
  title?: string;
  description?: string;
  maxItems?: number;
  showViewAll?: boolean;
  className?: string;
}

export function ServicesSection({
  title = 'Our Laboratory Services',
  description = 'Comprehensive diagnostic testing services for accurate and timely results',
  maxItems = 6,
  showViewAll = true,
  className,
}: ServicesSectionProps) {
  const displayedServices = maxItems ? services.slice(0, maxItems) : services;

  return (
    <section className={cn('py-12 bg-gray-50', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="flex flex-col h-full transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="h-12 w-12 rounded-md bg-blue-100 p-2.5 text-blue-600">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="px-0 text-blue-600 hover:text-blue-800">
                    <Link href={service.href}>
                      Learn more
                      <span className="sr-only"> about {service.name}</span>
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {showViewAll && maxItems && maxItems < services.length && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services
                <span className="sr-only">View all laboratory services</span>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
