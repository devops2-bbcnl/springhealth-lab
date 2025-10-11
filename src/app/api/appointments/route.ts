import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

// Define the same schema as the frontend for validation
const appointmentSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  testType: z.string().min(1, 'Please select a test type'),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    if (!process.env.ADMIN_EMAIL) {
      throw new Error('ADMIN_EMAIL environment variable is not set');
    }

    const body = await request.json();
    
    // Validate the request body
    const validation = appointmentSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.format() },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, date, time, testType, message } = validation.data;
    
    // Format the appointment date for display
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Format the email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a365d;">New Appointment Request</h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2d3748; margin-top: 0;">Patient Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <h3 style="color: #2d3748; margin-top: 20px;">Appointment Details</h3>
          <p><strong>Test Type:</strong> ${testType}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${time}</p>
          
          ${message ? `
          <h3 style="color: #2d3748; margin-top: 20px;">Additional Information</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          ` : ''}
        </div>
        
        <p style="color: #718096; font-size: 0.9em; margin-top: 30px;">
          This is an automated message. Please do not reply to this email.
        </p>
      </div>
    `;

    // Send email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: `New Appointment Request: ${firstName} ${lastName}`,
      html: emailHtml,
    });

    // Send confirmation email to the user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a365d;">Appointment Request Received</h2>
        
        <p>Dear ${firstName},</p>
        
        <p>Thank you for booking an appointment with SpringHealth Lab. We have received your request with the following details:</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2d3748; margin-top: 0;">Your Appointment</h3>
          <p><strong>Test Type:</strong> ${testType}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${time}</p>
        </div>
        
        <p>Our team will review your request and contact you shortly to confirm your appointment. If you have any questions, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>The SpringHealth Lab Team</p>
        
        <p style="color: #718096; font-size: 0.9em; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          This is an automated message. Please do not reply to this email.
        </p>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: 'Your Appointment Request - SpringHealth Lab',
      html: userEmailHtml,
    });
    
    return NextResponse.json(
      { success: true, message: 'Appointment request received. We will contact you soon to confirm your booking.' },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error processing appointment:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process appointment' },
      { status: 500 }
    );
  }
}
