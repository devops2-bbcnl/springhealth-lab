'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon, BeakerIcon } from '@heroicons/react/24/outline';

const backgroundImages = [
  '/images/landing-background.jpg',
  '/images/landing-background2.jpg',
  '/images/landing-background3.jpg'
];

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={backgroundImages[currentImageIndex]}
          alt="Medical laboratory background"
          fill
          className="object-cover transition-opacity duration-1000"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Page Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl text-white pt-20">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Precision In Every Test,</span>
                <span className="block text-blue-200">Care In Every Result</span>
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Accurate, reliable, and timely diagnostic testing for better healthcare outcomes. 
                Our certified laboratory provides comprehensive testing services with fast results.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/book"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 text-center md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-blue-600/80 hover:bg-blue-700/90 text-center md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
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
