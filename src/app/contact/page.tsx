'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
	CheckCircleIcon,
	MapPinIcon,
	PhoneIcon,
	EnvelopeIcon,
	ClockIcon,
} from '@heroicons/react/24/outline';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			console.log('Contact form submitted:', formData);
			setIsSubmitting(false);
			setIsSuccess(true);
			// Reset form
			setFormData({
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: '',
			});

			// Reset success message after 5 seconds
			setTimeout(() => setIsSuccess(false), 5000);
		}, 1500);
	};

	const contactInfo = [
		{
			icon: MapPinIcon,
			title: 'Address',
			description:
				'New Road, along Rochas Foundation. Opposite Fendoz Hotel Amakohia',
			href: 'https://maps.google.com',
		},
		{
			icon: PhoneIcon,
			title: 'Phone',
			description: '+234-803-334-2918',
			href: 'tel:+234-803-334-2918',
		},
		{
			icon: EnvelopeIcon,
			title: 'Email',
			description: 'info@springhealthlab.com',
			href: 'mailto:info@springhealthlab.com',
		},
		{
			icon: ClockIcon,
			title: 'Working Hours',
			description:
				'Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed',
			href: '/about#hours',
		},
	];

	return (
		<div className="bg-white">
			{/* Hero Section */}
			<div className="relative bg-blue-700">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <Image
      src="/images/contact-us.jpg"
      alt="Contact us"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-blue-900/70" />
  </div>
  
  {/* Content */}
  <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
      Contact Us
    </h1>
    <p className="mt-2 text-lg text-blue-100">
      We&apos;re here to help and answer any questions you might have.
    </p>
  </div>
</div>

			{/* Contact Section */}
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="bg-white shadow overflow-hidden sm:rounded-lg">
					<div className="px-4 py-5 sm:p-6">
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
							{/* Contact Information */}
							<div className="space-y-6">
								<h2 className="text-2xl font-bold text-gray-900">
									Get in Touch
								</h2>
								<p className="text-gray-500">
									Have questions about our services or need to schedule an
									appointment? Reach out to us using the contact form or the
									information below.
								</p>

								<div className="space-y-6 mt-8">
									{contactInfo.map((item, index) => {
										const Icon = item.icon;
										return (
											<div key={index} className="flex items-start">
												<div className="flex-shrink-0 h-6 w-6 text-blue-600">
													<Icon className="h-6 w-6" aria-hidden="true" />
												</div>
												<div className="ml-3 text-base">
													<h3 className="font-medium text-gray-900">
														{item.title}
													</h3>
													{item.href ? (
														<a
															href={item.href}
															className="text-blue-600 hover:text-blue-500 hover:underline"
															target="_blank"
															rel="noopener noreferrer"
														>
															{item.description.split('\n').map((line, i) => (
																<p key={i} className="text-gray-500">
																	{line}
																</p>
															))}
														</a>
													) : (
														<div className="text-gray-500">
															{item.description.split('\n').map((line, i) => (
																<p key={i}>{line}</p>
															))}
														</div>
													)}
												</div>
											</div>
										);
									})}
								</div>

								<div className="mt-8">
									<h3 className="text-lg font-medium text-gray-900">
										Follow Us
									</h3>
									<div className="flex space-x-6 mt-4">
										{[
											{ name: 'Facebook', href: '#', icon: 'facebook' },
											{ name: 'Twitter', href: '#', icon: 'twitter' },
											{ name: 'Instagram', href: '#', icon: 'instagram' },
											{ name: 'LinkedIn', href: '#', icon: 'linkedin' },
										].map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="text-gray-400 hover:text-blue-500"
											>
												<span className="sr-only">{item.name}</span>
												<i
													className={`fab fa-${item.icon} h-6 w-6`}
													aria-hidden="true"
												/>
											</a>
										))}
									</div>
								</div>
							</div>

							{/* Contact Form */}
							<div className="lg:col-span-2">
								<form onSubmit={handleSubmit} className="space-y-6">
									{isSuccess && (
										<div className="rounded-md bg-green-50 p-4 mb-6">
											<div className="flex">
												<div className="flex-shrink-0">
													<CheckCircleIcon
														className="h-5 w-5 text-green-400"
														aria-hidden="true"
													/>
												</div>
												<div className="ml-3">
													<h3 className="text-sm font-medium text-green-800">
														Message Sent
													</h3>
													<div className="mt-2 text-sm text-green-700">
														<p>
															Thank you for contacting us. We&apos;ll get back
															to you as soon as possible.
														</p>
													</div>
												</div>
											</div>
										</div>
									)}

									<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700"
											>
												Full Name <span className="text-red-500">*</span>
											</label>
											<div className="mt-1">
												<input
													type="text"
													name="name"
													id="name"
													required
													value={formData.name}
													onChange={handleChange}
													className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700"
											>
												Email <span className="text-red-500">*</span>
											</label>
											<div className="mt-1">
												<input
													id="email"
													name="email"
													type="email"
													autoComplete="email"
													required
													value={formData.email}
													onChange={handleChange}
													className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="phone"
												className="block text-sm font-medium text-gray-700"
											>
												Phone Number
											</label>
											<div className="mt-1">
												<input
													type="tel"
													name="phone"
													id="phone"
													value={formData.phone}
													onChange={handleChange}
													className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="subject"
												className="block text-sm font-medium text-gray-700"
											>
												Subject <span className="text-red-500">*</span>
											</label>
											<div className="mt-1">
												<select
													id="subject"
													name="subject"
													required
													value={formData.subject}
													onChange={handleChange}
													className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
												>
													<option value="">Select a subject</option>
													<option value="General Inquiry">
														General Inquiry
													</option>
													<option value="Appointment">Appointment</option>
													<option value="Test Results">Test Results</option>
													<option value="Billing">Billing</option>
													<option value="Other">Other</option>
												</select>
											</div>
										</div>

										<div className="sm:col-span-2">
											<label
												htmlFor="message"
												className="block text-sm font-medium text-gray-700"
											>
												Message <span className="text-red-500">*</span>
											</label>
											<div className="mt-1">
												<textarea
													id="message"
													name="message"
													rows={4}
													required
													value={formData.message}
													onChange={handleChange}
													className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
													placeholder="How can we help you?"
												/>
											</div>
										</div>
									</div>

									<div className="flex justify-end">
										<button
											type="submit"
											disabled={isSubmitting}
											className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
												isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
											}`}
										>
											{isSubmitting ? 'Sending...' : 'Send Message'}
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="bg-gray-50">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
					<div className="overflow-hidden rounded-lg shadow-xl">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d7.032774315294416!3d5.603372995922471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042f3f3b6f7e5c1%3A0x8d8a9a9a9a9a9a9a!2sFendoz%20Hotel%20Amakohia%2C%20New%20Rd%2C%20Owerri%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen={false}
							loading="lazy"
							title="SpringQuest Health Management Ltd Location"
							aria-label="Google Maps location of SpringQuest Health Management Ltd in Imo State, Nigeria"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
