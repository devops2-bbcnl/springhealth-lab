import Link from 'next/link';
import { mainNav } from '@/types/navigation';

export default function ResourcesPage() {
  const resourcesNav = mainNav.find(item => item.href === '/resources');
  
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Patient Resources</h1>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Available Resources</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourcesNav?.children?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item.description || 'Learn more about ' + item.title.toLowerCase()}
                </p>
                <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                  View details →
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            If you can&apos;t find what you&apos;re looking for, please don&apos;t hesitate to contact our support team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
