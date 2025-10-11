'use client';

import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  testType: z.string().min(1, 'Please select a test type'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function BookPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      testType: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }
      
      // Show success message
      setIsSuccess(true);
      
      // Reset form
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      // You might want to show an error toast/message to the user here
      alert(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    }
  };

  const testTypes = [
    'Complete Blood Count (CBC)',
    'Basic Metabolic Panel',
    'Lipid Panel',
    'Thyroid Test',
    'Liver Function Test',
    'Kidney Function Test',
    'Urinalysis',
    'Other (please specify in message)'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Book an Appointment
          </h1>
          <p className="mt-2 text-lg text-blue-100">
            Schedule your lab test with our certified professionals
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="bg-white shadow-lg overflow-hidden sm:rounded-2xl">
          <div className="px-6 py-8 sm:p-10">
            {isSuccess ? (
              <div className="rounded-md bg-green-50 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Appointment Requested</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>Your appointment request has been received. We&apos;ll contact you shortly to confirm your booking.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-8">
                <div className="pt-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p className="text-gray-600">
                      Please provide your personal details so we can contact you to confirm your appointment.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First name <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="firstName"
                          {...register('firstName')}
                          className={`block w-full px-4 py-3 border ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="lastName"
                          {...register('lastName')}
                          className={`block w-full px-4 py-3 border ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          {...register('email')}
                          className={`block w-full px-4 py-3 border ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          className={`block w-full px-4 py-3 border ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base`}
                          placeholder="(123) 456-7890"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Appointment Details</h3>
                    <p className="text-gray-600">
                      Please provide details about your preferred appointment time and test type.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          id="date"
                          min={new Date().toISOString().split('T')[0]}
                          {...register('date')}
                          className={`block w-full px-4 py-3 border ${
                            errors.date ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base`}
                        />
                        {errors.date && (
                          <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <select
                          id="time"
                          {...register('time')}
                          className={`block w-full px-4 py-3 border ${
                            errors.time ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base`}
                        >
                        {errors.time && (
                          <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                        )}
                          <option value="">Select a time</option>
                          <option value="08:00">8:00 AM</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="testType" className="block text-sm font-medium text-gray-700">
                        Test Type <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <select
                          id="testType"
                          {...register('testType')}
                          className={`block w-full px-4 py-3 border ${
                            errors.testType ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base`}
                        >
                        {errors.testType && (
                          <p className="mt-1 text-sm text-red-600">{errors.testType.message}</p>
                        )}
                          <option value="">Select a test type</option>
                          {testTypes.map((test, index) => (
                            <option key={index} value={test}>
                              {test}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Additional Information
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          rows={3}
                          {...register('message')}
                          className={`block w-full px-4 py-3 border ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base`}
                          placeholder="Any special requirements or notes..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="button"
                    className="w-full flex justify-center py-3 px-6 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : 'Request Appointment'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
