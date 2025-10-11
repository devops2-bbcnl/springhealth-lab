import { ClockIcon, LightBulbIcon, ExclamationTriangleIcon, CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const preparationGuidelines = [
  {
    name: 'Fasting Requirements',
    description: 'Some tests require fasting for accurate results.',
    icon: ClockIcon,
    details: [
      'Fast for 8-12 hours before your test (water is allowed)',
      'Avoid chewing gum, mints, or lozenges during fasting',
      'Take regular medications unless instructed otherwise',
      'Common tests requiring fasting: Lipid Profile, Glucose, Basic/Comprehensive Metabolic Panel'
    ]
  },
  {
    name: 'Medication Guidelines',
    description: 'What you need to know about medications before testing.',
    icon: LightBulbIcon,
    details: [
      'Continue taking all prescribed medications unless directed otherwise by your doctor',
      'Inform the lab technician about all medications and supplements you\'re taking',
      'Some supplements (like biotin) may interfere with test results',
      'If you\'re unsure about a medication, consult your healthcare provider'
    ]
  },
  {
    name: 'What to Avoid',
    description: 'Activities and substances that might affect your test results.',
    icon: ExclamationTriangleIcon,
    details: [
      'Avoid strenuous exercise 24 hours before testing',
      'No alcohol consumption for at least 24 hours before testing',
      'Avoid smoking for at least 1 hour before your test',
      'Some tests may require avoiding certain foods (like red meat) 24 hours before testing'
    ]
  },
  {
    name: 'What to Bring',
    description: 'Essential items for your visit.',
    icon: CheckCircleIcon,
    details: [
      'Valid photo ID (driver\'s license, passport, or state ID)',
      'Insurance card (if applicable)',
      'Doctor\'s referral or test requisition form (if required)',
      'List of current medications and dosages',
      'Any previous test results (if relevant)'
    ]
  },
  {
    name: 'During Your Visit',
    description: 'What to expect during your appointment.',
    icon: QuestionMarkCircleIcon,
    details: [
      'Arrive 15 minutes early to complete any necessary paperwork',
      'Wear loose-fitting clothing that allows easy access to your arms',
      'Stay hydrated unless instructed otherwise',
      'The actual blood draw typically takes 5-10 minutes',
      'You may experience mild discomfort during the blood draw'
    ]
  }
];

const commonTests = [
  {
    name: 'Lipid Panel',
    preparation: 'Fast for 9-12 hours before the test. Water is allowed.'
  },
  {
    name: 'Glucose Test',
    preparation: 'Fast for 8 hours before the test. Water is allowed.'
  },
  {
    name: 'Complete Blood Count (CBC)',
    preparation: 'No special preparation required.'
  },
  {
    name: 'Thyroid Function Tests',
    preparation: 'No special preparation required, but inform if you take thyroid medication.'
  },
  {
    name: 'Liver Function Tests',
    preparation: 'Avoid alcohol for 24 hours before the test.'
  },
  {
    name: 'Kidney Function Tests',
    preparation: 'Stay well-hydrated before the test.'
  }
];

export default function PreparationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Test Preparation
          </h1>
          <p className="mt-2 text-lg text-blue-100">
            Important information to help you prepare for your laboratory tests
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Preparation Guidelines</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How to Prepare for Your Test
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Proper preparation ensures accurate test results. Follow these guidelines unless your doctor provides different instructions.
            </p>
          </div>

          {/* Guidelines Grid */}
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {preparationGuidelines.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="relative bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-blue-500 text-white flex items-center justify-center">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="ml-4 text-lg font-medium text-gray-900">{item.name}</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                    <ul className="mt-4 space-y-2">
                      {item.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="ml-2 text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Common Tests Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Tests and Their Preparation</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Test-Specific Instructions</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Preparation instructions for common laboratory tests.</p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  {commonTests.map((test, index) => (
                    <div key={test.name} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                      <dt className="text-sm font-medium text-gray-500">{test.name}</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{test.preparation}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: 'Can I drink water before a fasting blood test?',
                  answer: 'Yes, you can drink water before a fasting blood test. In fact, staying hydrated can make it easier to draw blood. However, avoid other beverages like coffee, tea, or juice unless instructed otherwise.'
                },
                {
                  question: 'What should I do if I accidentally ate before a fasting test?',
                  answer: 'If you accidentally ate before a fasting test, inform the lab technician when you arrive. Depending on the test, you may need to reschedule or proceed with the test and note the time of your last meal.'
                },
                {
                  question: 'How long does it take to get test results?',
                  answer: 'Most routine test results are available within 24-48 hours. Some specialized tests may take longer. You\'ll be notified when your results are ready through our patient portal or your healthcare provider.'
                },
                {
                  question: 'Can I exercise before my blood test?',
                  answer: 'It\'s best to avoid strenuous exercise for 24 hours before your blood test, as it can affect certain test results. Light activities are usually fine, but check with your doctor if you have specific concerns.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-blue-600">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Still have questions?</h2>
            <p className="mt-2 text-gray-600">Contact our customer service team for more information about test preparation.</p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
