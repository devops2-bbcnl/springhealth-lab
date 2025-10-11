import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insurance Plans | SpringQuest Health',
  description: 'Explore our affordable healthcare plans and save on essential medical tests',
};

const plans = [
  {
    name: 'STANDARD PLAN',
    price: 'N20,000',
    description: 'With N20,000 a year, you can access each of all the underlisted tests 6 times a year and save N61,000',
    features: [
      'Retroviral Screening (HIV)',
      'Hepatitis B Screening',
      'Hepatitis C Screening',
      'VDRL Screening (Syphilis)',
      'Fasting Blood Sugar'
    ],
    ctaText: 'Choose Standard Plan',
    popular: false
  },
  {
    name: 'CLASSIC PLAN',
    price: 'N50,000',
    description: 'With N50,000 a year, you can access each of all the underlisted tests 5 times a year and save N60,000',
    features: [
      'Retroviral Screening (HIV)',
      'Hepatitis B Screening',
      'Hepatitis C Screening',
      'VDRL Screening (Syphilis)',
      'Fasting Blood Sugar',
      'Malaria Parasite',
      'Packed Cell Volume',
      'Urinalysis'
    ],
    ctaText: 'Choose Classic Plan',
    popular: true
  },
  {
    name: 'DELUXE PLAN',
    price: 'N150,000',
    description: 'With N150,000 a year, you can access each of all the underlisted tests 4 times a year and save N78,000',
    features: [
      'Retroviral Screening (HIV)',
      'Hepatitis B Screening',
      'Hepatitis C Screening',
      'VDRL Screening (Syphilis)',
      'Fasting Blood Sugar',
      'Malaria Parasite',
      'Full Blood Count',
      'Kidney Function Tests',
      'Liver Function Tests',
      'Fasting Lipid Profile'
    ],
    ctaText: 'Choose Deluxe Plan',
    popular: false
  }
];

export default function InsurancePlans() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Insurance Plans
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect plan that fits your healthcare needs and budget
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 bg-white border-2 ${
                plan.popular ? 'border-blue-600' : 'border-gray-200'
              } rounded-2xl shadow-sm flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-lg font-medium text-gray-500">/year</span>
                </div>
                <p className="mt-4 text-gray-600">{plan.description}</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/book"
                  className={`block w-full px-6 py-3 border border-transparent text-center text-base font-medium rounded-md ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Need help choosing a plan?</h2>
          <p className="mt-2 text-lg text-gray-600">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
