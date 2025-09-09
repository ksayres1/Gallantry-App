import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/schemas';
import { sendEmail, generateContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const topicLabels = {
      general: 'General Inquiry',
      tour: 'Tour Request',
      roundtables: 'Roundtables/BOARD Groups',
      kos: 'KOS Briefings',
      media: 'Media/Press',
      other: 'Other'
    };

    // Send email notification
    await sendEmail({
      to: 'ken@overcomeworldwide.org',
      subject: `Contact Form: ${topicLabels[data.topic]} - ${data.name}`,
      html: generateContactEmail({ ...data, topic: topicLabels[data.topic] }),
      replyTo: data.email
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 400 }
    );
  }
}