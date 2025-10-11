import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ContactInfo {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string | string[];
  link?: string;
  linkText?: string;
}

interface ContactInformationProps {
  title?: string;
  description?: string;
  className?: string;
}

export function ContactInformation({
  title = 'Contact Information',
  description = 'Get in touch with us for any questions or to schedule an appointment',
  className,
}: ContactInformationProps) {
  const contactInfo: ContactInfo[] = [
    {
      id: 1,
      icon: MapPinIcon,
      title: 'Our Location',
      description: '123 Medical Center Drive, Suite 100, Anytown, ST 12345',
      link: 'https://maps.google.com',
      linkText: 'View on map',
    },
    {
      id: 2,
      icon: PhoneIcon,
      title: 'Phone Number',
      description: ['(555) 123-4567', 'Fax: (555) 123-4568'],
      link: 'tel:5551234567',
      linkText: 'Call us',
    },
    {
      id: 3,
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: 'info@springhealthlab.com',
      link: 'mailto:info@springhealthlab.com',
      linkText: 'Send email',
    },
    {
      id: 4,
      icon: ClockIcon,
      title: 'Working Hours',
      description: [
        'Monday - Friday: 7:00 AM - 7:00 PM',
        'Saturday: 8:00 AM - 2:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  return (
    <section className={cn('bg-white py-12 sm:py-16', className)}>
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                    <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-4">
                  {Array.isArray(item.description) ? (
                    <div className="space-y-2">
                      {item.description.map((line, index) => (
                        <p key={index} className="text-base text-gray-600">
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base text-gray-600">{item.description}</p>
                  )}
                  {item.link && item.linkText && (
                    <div className="mt-4">
                      <a
                        href={item.link}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        {item.linkText} →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
