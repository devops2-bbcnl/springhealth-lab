import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    id: 1,
    question: 'How do I prepare for my lab test?',
    answer:
      'Most tests don\'t require special preparation, but some tests like cholesterol or glucose tests may require fasting for 8-12 hours. Your healthcare provider will give you specific instructions if any preparation is needed. Make sure to stay hydrated and bring your ID and insurance information to your appointment.',
  },
  {
    id: 2,
    question: 'How long will it take to get my test results?',
    answer:
      'Test result times vary depending on the type of test. Routine blood work typically takes 1-3 business days, while more specialized tests may take 1-2 weeks. Your healthcare provider will receive the results and share them with you during your follow-up appointment or through our patient portal.',
  },
  {
    id: 3,
    question: 'Do I need an appointment for lab tests?',
    answer:
      'While walk-ins are welcome, we highly recommend scheduling an appointment to minimize your wait time. You can easily book an appointment online through our website or by calling our office. Same-day appointments are often available.',
  },
  {
    id: 4,
    question: 'What should I bring to my appointment?',
    answer:
      'Please bring a valid photo ID, your insurance card, any referral or test requisition forms from your doctor, and a list of current medications. If you\'re using insurance, make sure to have your insurance information handy.',
  },
  {
    id: 5,
    question: 'Do you offer at-home testing?',
    answer:
      'Yes, we offer at-home testing services for certain tests. Our phlebotomists can come to your home or workplace to collect samples. Contact our office to check if your required test is available for at-home collection and to schedule an appointment.',
  },
  {
    id: 6,
    question: 'How accurate are your test results?',
    answer:
      'We maintain the highest standards of accuracy in all our testing procedures. Our laboratory is CLIA-certified and follows strict quality control measures. We use state-of-the-art equipment and our staff undergoes regular training to ensure precise and reliable results.',
  },
];

interface FaqSectionProps {
  title?: string;
  description?: string;
  maxItems?: number;
  className?: string;
}

export function FaqSection({
  title = 'Frequently Asked Questions',
  description = 'Find answers to common questions about our laboratory services',
  maxItems = 6,
  className,
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<number | null>(1);
  const displayedFaqs = maxItems ? faqs.slice(0, maxItems) : faqs;

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={cn('bg-white py-12 sm:py-16', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-xl text-gray-500">
                {description}
              </p>
            )}
          </div>

          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {displayedFaqs.map((faq) => (
              <div key={faq.id} className="pt-6">
                <dt className="text-lg">
                  <button
                    type="button"
                    className="text-left w-full flex justify-between items-start text-gray-700"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={openId === faq.id}
                    aria-controls={`faq-${faq.id}`}
                  >
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                      {openId === faq.id ? (
                        <MinusIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </dt>
                <dd 
                  id={`faq-${faq.id}`}
                  className={cn(
                    'mt-2 pr-12',
                    openId === faq.id ? 'block' : 'hidden'
                  )}
                >
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
