export type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
    description: 'View our comprehensive range of medical tests and services',
  },
  {
    title: 'About Us',
    href: '/about',
    description: 'Learn about our team and accreditations',
  },
  {
    title: 'Patient Resources',
    href: '/resources',
    children: [
      {
        title: 'Test Preparation',
        href: '/resources/preparation',
      },
      {
        title: 'FAQs',
        href: '/resources/faqs',
      },
      {
        title: 'Blog',
        href: '/blog',
      },
    ],
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch with our team',
  },
];

export const ctaNav = {
  bookAppointment: {
    title: 'Book Appointment',
    href: '/book',
  },
  requestQuote: {
    title: 'Request Quote',
    href: '/quote',
  },
};
