import { NextRequest, NextResponse } from 'next/server';
import { tourRequestSchema } from '@/lib/schemas';
import { sendEmail, generateTourRequestEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = tourRequestSchema.parse(body);

    // Send email notification
    await sendEmail({
      to: 'ken@overcomeworldwide.org',
      subject: `New Gallantry Tour Request - ${data.city}, ${data.state}`,
      html: generateTourRequestEmail(data),
      replyTo: data.email
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Tour request submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing tour request:', error);
    return NextResponse.json(
      { error: 'Failed to submit tour request' },
      { status: 400 }
    );
  }
}