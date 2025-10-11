import Image from 'next/image';
import { BeakerIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import aboutImage from '../../../public/images/lab-team.jpg';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-700/80 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Our Laboratory
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Committed to excellence in diagnostic testing and patient care through innovation and expertise.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Founded in 2020, our laboratory has been at the forefront of diagnostic excellence, serving our community with cutting-edge technology and compassionate care.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <Image
                  className="relative mx-auto rounded-lg shadow-lg"
                  src={aboutImage}
                  alt="Our laboratory team"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="space-y-10">
                {[
                  {
                    icon: BeakerIcon,
                    title: 'Advanced Technology',
                    description: 'State-of-the-art equipment and testing methods for accurate and reliable results.'
                  },
                  {
                    icon: UserGroupIcon,
                    title: 'Expert Team',
                    description: 'Our team of certified professionals is dedicated to providing the highest quality care.'
                  },
                  {
                    icon: ShieldCheckIcon,
                    title: 'Quality Assurance',
                    description: 'Rigorous quality control measures ensure the accuracy and reliability of every test.'
                  }
                ].map((item, itemIdx) => (
                  <div key={itemIdx} className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.title}</p>
                    <p className="mt-2 ml-16 text-base text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to experience our services?</span>
            <span className="block text-blue-600">Book an appointment today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/book"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Book Now
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
