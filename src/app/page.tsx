import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon, BeakerIcon } from '@heroicons/react/24/outline';
import heroImage from '../../public/images/lab-staff.jpg'

const features = [
  {
    name: 'Accurate Results',
    description: 'Our state-of-the-art laboratory equipment ensures precise and reliable test results every time.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Fast Turnaround',
    description: 'Get your test results quickly with our efficient processing and reporting system.',
    icon: ClockIcon,
  },
  {
    name: 'Certified Experts',
    description: 'Our team of certified medical professionals provides expert care and accurate analysis.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Wide Range of Tests',
    description: 'Comprehensive testing services for all your healthcare needs, from routine check-ups to specialized diagnostics.',
    icon: BeakerIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-700 sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Advanced Medical</span>
                  <span className="block text-blue-200">Laboratory Services</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Accurate, reliable, and timely diagnostic testing for better healthcare outcomes. 
                  Our certified laboratory provides comprehensive testing services with fast results.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/book"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                    >
                      Book an Appointment
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10"
                    >
                      View Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-full overflow-hidden">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-blue-700/40 z-10 mix-blend-multiply" />
            <Image
              src={heroImage}
              alt="Medical laboratory professional working"
              fill
              sizes="(max-width: 1024px) 0vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Quality Care You Can Trust
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are committed to providing exceptional laboratory services with the highest standards of quality and accuracy.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Book your test today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Fast, accurate, and confidential testing services for all your healthcare needs.
          </p>
          <Link
            href="/book"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Schedule Now
          </Link>
        </div>
      </div>
    </div>
  );
}
