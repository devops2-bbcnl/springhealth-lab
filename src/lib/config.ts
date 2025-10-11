export const siteConfig = {
  name: 'SpringQuest Health Management Ltd',
  description:
    'Accurate, reliable, and timely diagnostic testing for better healthcare outcomes. Our certified laboratory provides comprehensive testing services with fast results.',
  url: 'https://springhealthlabs.com',
  ogImage: 'https://springhealthlabs.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/springhealthlabs',
    facebook: 'https://facebook.com/springhealthlabs',
    instagram: 'https://instagram.com/springhealthlabs',
    linkedin: 'https://linkedin.com/company/springhealthlabs',
  },
  contact: {
    email: 'info@springhealthlabs.com',
    phone: '+1 (555) 123-4567',
    address: '123 Medical Center Drive, Suite 100, Anytown, ST 12345',
  },
  hours: [
    { day: 'Monday - Friday', hours: '7:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],
} as const;

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Patient Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export const features = [
  {
    name: 'Accurate Results',
    description:
      'Our state-of-the-art laboratory equipment ensures precise and reliable test results every time.',
    icon: 'CheckCircle',
  },
  {
    name: 'Fast Turnaround',
    description:
      'Get your test results quickly with our efficient processing and reporting system.',
    icon: 'Clock',
  },
  {
    name: 'Certified Experts',
    description:
      'Our team of certified medical professionals provides expert care and accurate analysis.',
    icon: 'ShieldCheck',
  },
  {
    name: 'Wide Range of Tests',
    description:
      'Comprehensive testing services for all your healthcare needs, from routine check-ups to specialized diagnostics.',
    icon: 'Beaker',
  },
];
